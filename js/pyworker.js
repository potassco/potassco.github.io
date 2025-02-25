importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js");

const messageSchemas = {
    run: {
        args: "array",
        input: "string",
    },
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

class ClingoApp(Application):
    def __init__(self, name):
        self.program_name = name

    def main(self, ctl, files):
        for f in files:
            ctl.load(f)
        if not files:
            ctl.load("-")

        if "main" in __main__.__dict__ and callable(__main__.__dict__["main"]):
            __main__.__dict__["main"](ctl)
        else:
            ctl.ground([("base", [])])
            ctl.solve()

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

async function run(input, args) {
    postMessage({ type: "stderr", value: "Loading pyodide..." });
    const pyodide = await loadPyodide();
    postMessage({ type: "stderr", value: "Loading micropip..." });
    await pyodide.loadPackage("micropip")
    postMessage({ type: "stderr", value: "Installing clingo..." });
    const micropip = pyodide.pyimport("micropip")
    await micropip.install("clingo")
    postMessage({ type: "stderr", value: "Ready!" });
    pyodide.setStdin(new StdinHandler(input));
    pyodide.setStdout({ batched: (msg) => postMessage({ type: "stdout", value: msg }) });
    pyodide.setStderr({ batched: (msg) => postMessage({ type: "stderr", value: msg }) });
    pyodide.runPython(code);
    pyodide.globals.get('run_clingo_main')(pyodide.toPy(args));
}

self.addEventListener('message', (e) => {
    const msg = e.data
    const error = validateMessage(msg, messageSchemas);
    if (error) {
        postMessage({ type: "stderr", value: error });
    }
    else if (msg.type === 'run') {
        try {
            run(msg.input, msg.args)
        } catch (error) {
            postMessage({ type: "stderr", value: error.toString() });
        }
    }
})

postMessage({ type: "ready" })
