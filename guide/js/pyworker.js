importScripts("https://cdn.jsdelivr.net/pyodide/v0.28.3/full/pyodide.js");

const messageSchemas = {
    run: {
        args: "array",
        files: "array",
    },
    init: {},
};

function validateMessage(msg, schemas) {
    if (!msg || typeof msg !== "object") {
        return "Invalid message format: Expected an object.";
    }
    if (!msg.type || typeof msg.type !== "string") {
        return "Invalid message: 'type' must be a string.";
    }
    const schema = schemas[msg.type];
    if (!schema) {
        return `Unknown message type: '${msg.type}'.`;
    }
    for (const [key, expectedType] of Object.entries(schema)) {
        const actualType = Array.isArray(msg[key]) ? "array" : typeof msg[key];
        if (actualType !== expectedType) {
            return `Invalid '${msg.type}' message: '${key}' must be of type '${expectedType}', but got '${actualType}'.`;
        }
    }
    return null;
}

const code = `
from clingo.core import Library
from clingo.app import clingo_main
from clingo.script import enable_python

def run_clingo_main(args, python):
    with Library() as lib:
        enable_python(lib)
        for name in python:
            with open(name, "r") as hnd:
                compiled = compile(hnd.read(), name, "exec")
                exec(compiled, globals())
        clingo_main(lib, args)
`;

class StdinHandler {
    constructor(input) {
        this.lines = input.split("\n");
        this.current = 0;
    }
    stdin() {
        if (this.current < this.lines.length) {
            return this.lines[this.current++] + "\n";
        }
        return null;
    }
}

let pyodide = null;

async function init() {
    postMessage({ type: "progress", value: "pyodide" });
    pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    await micropip.install(new URL("./clingo-6.0.0-cp313-cp313-pyodide_2025_0_wasm32.whl", self.location.href).toString());
    pyodide.setStdout({ batched: (msg) => postMessage({ type: "stdout", value: msg }) });
    pyodide.setStderr({ batched: (msg) => postMessage({ type: "stderr", value: msg }) });
    await pyodide.runPythonAsync(code);
}

async function run(files, args) {
    try {
        const python = [];
        pyodide.setStdin(new StdinHandler(""));
        files.forEach((file) => {
            pyodide.FS.writeFile(file.name, file.content);
            if (file.type == "python") {
                python.push(file.name);
            } else {
                args.push(file.name);
            }
        });
        pyodide.globals.get("run_clingo_main")(pyodide.toPy(args), pyodide.toPy(python));
    } catch (error) {
        postMessage({ type: "stderr", value: error.toString() });
    }
}

self.addEventListener("message", (e) => {
    const msg = e.data;
    const error = validateMessage(msg, messageSchemas);
    if (error) {
        postMessage({ type: "stderr", value: error });
    } else if (msg.type === "init") {
        init().then(() => postMessage({ type: "init" }));
    } else if (msg.type === "run") {
        run(msg.files, msg.args).then(() => postMessage({ type: "exit" }));
    }
});

postMessage({ type: "ready" });
