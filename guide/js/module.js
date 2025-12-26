(() => {
  const Utils = (() => {
    const stripAnsiCodes = (input) => input.replace(/\x1b\[[0-9;]*m/g, "");

    return { stripAnsiCodes };
  })();

  class ClingoView extends EventTarget {
    constructor(editor, runButton, inputElement, outputElement, options) {
      super();

      this.editor = editor;
      this.runButton = runButton;
      this.outputElement = outputElement;
      this.inputElement = inputElement;
      this.options = options;

      this.runButton.onclick = () =>
        this.dispatchEvent(new CustomEvent("run-request"));
      this.inputElement.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.ctrlKey) {
          this.dispatchEvent(new CustomEvent("run-request"));
        }
      });
    }

    getFiles() {
      const entries = [];
      entries.push({
        name: "input.lp",
        type: "clingo",
        content: this.editor.session.getValue(),
      });
      return entries;
    }

    getOptions() {
      const content = this.editor.session.getValue();
      const prefix = "%% OPTIONS:";
      const start = content.indexOf(prefix);
      if (start !== -1) {
        const end = content.indexOf("\n", start);
        return content
          .substring(start + prefix.length, end === -1 ? content.length : end)
          .trim()
          .split(" ");
      }
      return this.options;
    }

    clearOutput() {
      this.outputElement.style.display = "none";
      this.outputElement.textContent = "";
    }

    updateOutput(text) {
      this.outputElement.style.display = "block";
      this.outputElement.textContent += `${text}\n`;
    }

    updateButton(state) {
      this.runButton.style.opacity = state === "ready" ? "100%" : "60%";
      if (state === "ready") {
        this.runButton.classList.remove("button--loading");
      } else {
        this.runButton.classList.add("button--loading");
      }
    }
  }

  class ClingoModel extends EventTarget {
    constructor() {
      super();

      this.worker = null;
      this.state = "running";
      this.files = [];
      this.args = [];
      this.work = false;
      this.py = false;
      this.ispy = false;
    }

    enablePython(enable) {
      this.py = enable;
      if (this.py != this.ispy) {
        // NOTE: we set the state to running here to pretend the worker
        // is running. This will terminate the worker on the following
        // startWorker call.
        this.state = "running";
        this.startWorker();
      }
    }

    startWorker() {
      if (this.state == "ready" || this.state == "init") {
        return;
      }
      this.state = "init";
      this.dispatchEvent(
        new CustomEvent("update-button", { detail: this.state }),
      );
      if (this.worker != null) {
        this.worker.terminate();
      }

      if (this.py) {
        this.ispy = true;
        this.worker = new Worker("/guide/js/pyworker.js");
      } else {
        this.ispy = false;
        this.worker = new Worker("/guide/js/worker.js");
      }

      this.worker.onmessage = (e) => {
        const msg = e.data;
        switch (msg.type) {
          case "init":
            this.state = "ready";
            this.runIfReady();
            break;
          case "ready":
            this.worker.postMessage({ type: "init" });
            break;
          case "exit":
            setTimeout(() => this.startWorker(), 0);
            break;
          case "stdout":
            this.dispatchEvent(
              new CustomEvent("output-append", { detail: msg.value }),
            );
            break;
          case "stderr":
            this.dispatchEvent(
              new CustomEvent("output-append", {
                detail: Utils.stripAnsiCodes(msg.value),
              }),
            );
            break;
        }
      };
    }

    runIfReady() {
      if (this.state == "ready" && this.work) {
        this.target();
        this.dispatchEvent(new CustomEvent("output-clear"));
        this.state = "running";
        this.work = false;
        this.worker.postMessage({
          type: "run",
          files: this.files,
          args: this.args,
        });
      }
      this.dispatchEvent(
        new CustomEvent("update-button", { detail: this.state }),
      );
    }

    run(args, files, target) {
      this.work = true;
      this.args = args;
      this.files = files;
      this.target = target;
      if (files.find((file) => file.type === "python")) {
        this.enablePython(true);
      }
      // NOTE: this stops currently running worker and starts a new one.
      this.startWorker();
      this.runIfReady();
    }
  }

  class ClingoController {
    constructor() {
      this.model = new ClingoModel();
      this.target = null;
      this.model.addEventListener("output-append", (e) =>
        this.target?.updateOutput(e.detail),
      );
      this.model.addEventListener("output-clear", () =>
        this.target?.clearOutput(),
      );
      this.views = [];
    }

    addView(editor, runButton, inputElement, outputElement, options) {
      const view = new ClingoView(
        editor,
        runButton,
        inputElement,
        outputElement,
        options,
      );
      view.addEventListener("run-request", () =>
        this.model.run(
          view.getOptions(),
          view.getFiles(),
          () => (this.target = view),
        ),
      );
      view.addEventListener("python-toggle", (e) =>
        this.model.enablePython(e.detail),
      );
      this.model.addEventListener("update-button", (e) =>
        view.updateButton(e.detail),
      );
      this.model.startWorker();
      this.views.push(view);
    }
  }

  const controller = new ClingoController();

  document.addEventListener("DOMContentLoaded", function () {
    for (const block of document.getElementsByClassName("clingo-code")) {
      // replace block by ace editor
      const editor = ace.edit(block);
      editor.setTheme("ace/theme/textmate");
      editor.$blockScrolling = Infinity;
      editor.setOptions({
        useSoftTabs: true,
        tabSize: 4,
        minLines: 1,
        maxLines: Infinity,
        autoScrollEditorIntoView: true,
        mode: `ace/mode/clingo`,
      });
      const session = editor.getSession();
      var content = session.getValue().trim();
      // The first line of content might start with "%% OPTIONS: <space separated options>" I want to extract these options and store them in a data attribute of the block.
      var options = [];
      const prefix = "%%% OPTIONS:";
      if (content.startsWith(prefix)) {
        const index = content.indexOf("\n");
        options = content.substring(prefix.length, index).trim().split(" ");
        content = content.substring(index + 1);
      }
      session.setValue(content);

      // create the button
      var button = document.createElement("button");
      button.className = "clingo-run-button";
      button.textContent = "▶";

      // Create the output
      var output = document.createElement("div");
      output.className = "clingo-output";

      // insert button and output
      block.style.position = "relative";
      block.appendChild(button);
      block.parentNode.insertBefore(output, block.nextSibling);

      controller.addView(editor, button, block, output, options);
    }
  });
})();
