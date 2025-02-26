importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js");

const messageSchemas = {
    run: {
        args: "array",
        input: "string",
    },
    init: {}
};

function validateMessage(msg, schemas) {
    if (!msg || typeof msg !== 'object') {
        return "Invalid message format: Expected an object.";
    }
    if (!msg.type || typeof msg.type !== 'string') {
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
import sys

from clingo.application import Application, clingo_main
from clingo.script import enable_python

import __main__

Application.main = lambda self, ctl, files: None

class ClingoApp(Application):
    def __init__(self, name):
        self.program_name = name

def run_clingo_main(args):
    enable_python()
    clingo_main(ClingoApp("clingo"), args)
`;

class StdinHandler {
    constructor(input) {
        this.lines = input.split('\n');
        this.current = 0
    }
    stdin() {
        if (this.current < this.lines.length) {
            return this.lines[this.current++] + '\n';
        }
        return null;
    }
};

let pyodide = null

async function init() {
    postMessage({ type: "progress", value: "pyodide" });
    pyodide = await loadPyodide();
    postMessage({ type: "progress", value: "micropip" });
    await pyodide.loadPackage("micropip")
    postMessage({ type: "progress", value: "clingo" });
    const micropip = pyodide.pyimport("micropip")
    await micropip.install("clingo")
    postMessage({ type: "progress", value: "ready" });
    pyodide.setStdout({ batched: (msg) => postMessage({ type: "stdout", value: msg }) });
    pyodide.setStderr({ batched: (msg) => postMessage({ type: "stderr", value: msg }) });
    await pyodide.runPythonAsync(code);
}

async function run(input, args) {
    try {
        pyodide.setStdin(new StdinHandler(input))
        pyodide.globals.get('run_clingo_main')(pyodide.toPy(args))
    } catch (error) {
        postMessage({ type: "stderr", value: error.toString() });
    }
}

self.addEventListener('message', (e) => {
    const msg = e.data
    const error = validateMessage(msg, messageSchemas);
    if (error) {
        postMessage({ type: "stderr", value: error });
    }
    else if (msg.type === 'init') {
        init().then(() => postMessage({ type: "init" }))
    }
    else if (msg.type === 'run') {
        run(msg.input, msg.args).then(() => postMessage({ type: "exit" }))
    }
})

postMessage({ type: "ready" })
