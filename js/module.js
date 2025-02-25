const Clingo = (() => {
    const outputElement = document.getElementById('output');
    const inputElement = ace.edit("input");
    const stats = document.getElementById("stats")
    const project = document.getElementById("project")
    const mode = document.getElementById("mode");
    const examples = document.getElementById("examples");

    let worker = null;
    let output = "";

    inputElement.setTheme("ace/theme/textmate");
    inputElement.$blockScrolling = Infinity;
    inputElement.setOptions({
        useSoftTabs: true,
        tabSize: 2,
        maxLines: Infinity,
        mode: "ace/mode/clingo",
        autoScrollEditorIntoView: true
    });

    const load = (path) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                inputElement.setValue(request.responseText.trim(), -1);
            }
        }
        request.open("GET", path, true);
        request.send();
    };
    const load_example = () => load(examples.value);

    const query_params = Object.fromEntries(
        Array.from(new URLSearchParams(window.location.search))
            .map(([key, value]) => [key, decodeURIComponent(value)])
    );
    if (query_params.example !== undefined) {
        const example_path = `/clingo/run/examples/${query_params.example}`;
        examples.value = example_path;
        load(example_path);
    }

    document.querySelector("#input").addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.ctrlKey) {
            startWorker();
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

    const startWorker = () => {
        if (worker) {
            worker.terminate();
            worker = null;
        }
        const args = buildArgs();
        worker = new Worker('/js/worker.js');

        clearOutput()
        updateOutput("Downloading...")
        let n = 0;
        const stdin = inputElement.getValue()
        worker.onmessage = function (e) {
            const msg = e.data
            switch (msg.type) {
                case "dependencies":
                    const i = msg.value
                    n = Math.max(n, i);
                    if (i) {
                        updateOutput(`Preparing... (${n - i}/${n})`)
                    }
                    else {
                        updateOutput('Running...')
                    }
                    break;
                case "ready":
                    worker.postMessage({ type: 'run', input: stdin, args: args });
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

    return { 'run': startWorker, 'load': load_example };
})();
