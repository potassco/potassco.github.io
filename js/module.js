const Clingo = (() => {
    const outputElement = document.getElementById('output')
    const inputElement = ace.edit("input")
    const stats = document.getElementById("stats")
    const project = document.getElementById("project")
    const mode = document.getElementById("mode")
    const examples = document.getElementById("examples")
    const indicator = document.getElementById('clingoRun')
    const python = document.getElementById('python')

    let worker = null;
    let output = "";
    let state = "running";
    let stdin = ""
    let args = []
    let work = false
    let py = false
    let ispy = false

    inputElement.setTheme("ace/theme/textmate");
    inputElement.$blockScrolling = Infinity;
    inputElement.setOptions({
        useSoftTabs: true,
        tabSize: 4,
        maxLines: Infinity,
        mode: "ace/mode/clingo",
        autoScrollEditorIntoView: true
    });

    const updateButton = () => {
        indicator.style.opacity = state === "ready" ? '100%' : '60%';
    }

    const load = (path) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                inputElement.setValue(request.responseText.trim(), -1);
            }
        }
        if (py) {
            request.open("GET", `/clingo/pyrun/examples/${path}`, true);
        }
        else {
            request.open("GET", `/clingo/run/examples/${path}`, true);
        }
        request.send();
    };
    const load_example = () => load(examples.value);

    const query_params = Object.fromEntries(
        Array.from(new URLSearchParams(window.location.search))
            .map(([key, value]) => [key, decodeURIComponent(value)])
    );
    if (query_params.example !== undefined) {
        examples.value = query_params.example;
        load(query_params.example);
    }

    document.querySelector("#input").addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.ctrlKey) {
            run();
        }
    })

    const stripAnsiCodes = (input) => input.replace(/\x1b\[[0-9;]*m/g, '');

    const clearOutput = () => {
        output = ""
        if (outputElement) {
            outputElement.textContent = output;
        }
    }

    const updateOutput = (text) => {
        if (text !== null) {
            output += text + "\n"
        }
        if (outputElement) {
            outputElement.textContent = output;
        }
    }

    const buildArgs = () => {
        let args = []
        switch (mode.value) {
            case "brave":
                args.push(...["--opt-mode=optN", "--enum-mode=brave"])
                break;
            case "cautious":
                args.push(...["--opt-mode=optN", "--enum-mode=cautious"])
                break;
            case "enumerate":
                args.push(...["--opt-mode=optN", "0"]);
                break;
            default:
                break;
        }
        if (stats.checked) {
            args.push("--stats");
        }
        if (project.checked) {
            args.push("--project");
        }
        return args;
    }

    const runClingo = () => {
        if (state == "ready") {
            if (work) {
                clearOutput()
                state = "running"
                work = false
                console.log(stdin)
                worker.postMessage({ type: 'run', input: stdin, args: args });
            }
        }
        updateButton()
    }

    python.addEventListener('change', function () {
        py = this.checked
        if (py != ispy) {
            state = "running"
            startWorker()
        }
    });

    const startWorker = () => {
        if (state == "ready" || state == "init") {
            return;
        }
        state = "init"
        updateButton()
        if (worker != null) {
            worker.terminate();
        }

        if (py) {
            ispy = true
            worker = new Worker('/js/pyworker.js');
        } else {
            ispy = false
            worker = new Worker('/js/worker.js');
        }

        worker.onmessage = function (e) {
            const msg = e.data
            switch (msg.type) {
                case "init":
                    state = "ready"
                    runClingo()
                    break;
                case "ready":
                    worker.postMessage({ type: 'init' });
                    break;
                case "exit":
                    setTimeout(startWorker, 0)
                    break;
                case "stdout":
                    updateOutput(msg.value);
                    break;
                case "stderr":
                    updateOutput(stripAnsiCodes(msg.value));
                    break;
            }
        };
    }

    const run = () => {
        work = true
        stdin = inputElement.getValue()
        args = buildArgs()
        startWorker()
        runClingo()
    }

    startWorker()

    return { 'run': run, 'load': load_example };
})();
