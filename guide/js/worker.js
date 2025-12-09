importScripts("clingo.js");

let Clingo = null;

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

self.addEventListener("message", (e) => {
    const msg = e.data;
    const error = validateMessage(msg, messageSchemas);
    if (error) {
        postMessage({ type: "stderr", value: error });
    } else if (msg.type === "init") {
        Module({
            print: (text) => {
                postMessage({ type: "stdout", value: text });
            },
            printErr: (text) => {
                postMessage({ type: "stderr", value: text });
            },
            monitorRunDependencies: (left) => {
                postMessage({ type: "progress", value: left });
            },
        }).then((m) => {
            Clingo = m;
            postMessage({ type: "init" });
        });
    } else if (msg.type === "run") {
        const vec = new Clingo.StringVec();
        msg.files.forEach((file) => {
            Clingo.FS.writeFile(file.name, file.content);
            vec.push_back(file.name);
        });
        for (const arg of msg.args) {
            vec.push_back(arg);
        }
        Clingo.run_default(vec);
        postMessage({ type: "exit" });
    }
});

postMessage({ type: "ready" });
