importScripts('clingo.js');

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

Module({
    preRun: [],
    postRun: [],
    print: (text) => {
        postMessage({ type: "stdout", value: text });
    },
    printErr: (text) => {
        postMessage({ type: "stderr", value: text });
    },
    monitorRunDependencies: (left) => {
        postMessage({ type: "dependencies", value: left });
    },
}).then(function (Clingo) {
    self.addEventListener('message', (e) => {
        const msg = e.data
        const error = validateMessage(msg, messageSchemas);
        if (error) {
            postMessage({ type: "stderr", value: error });
        }
        else if (msg.type === 'run') {
            Clingo.ccall('run', 'number', ['string', 'string'], [msg.input, msg.args.join(" ")])
        }
    })
    postMessage({ type: "ready" });
});

