const { CompositeDisposable } = require("atom");

class LicenseGenerator {
  constructor() {
    this.disposables = new CompositeDisposable();

    this.disposables.add(
      atom.commands.add("atom-workspace",{
        "LicenseGenerator: MIT": () => {
          this.generate("mit");
        },
        "LicenseGenerator:Apache 2.0": () => {
          this.generate("apache-2.0");
        }
      })
    );
  }

  deactivate() {
    this.disposables.dispose();
  }

  generate(fileName) {
    // Generates the License file, given a file name
    const fs = require("fs");
    const path = require("path");

    // TODO Support creating the file itself.
    // For now we will just insert the text into the active editor
    let file = fs.readFileSync(
      path.join(__dirname, "../licenses", `${fileName}.txt`),
      { encoding: "utf8" }
    );

    // Now replace the content where applicable
    file = file.replace("<NAME>", atom.config.get("license-generator.name"));
    file = file.replace("<EMAIL>", atom.config.get("license-generator.email"));
    file = file.replace("<YEAR>", this.getYear());

    let editor = atom.workspace.getActiveTextEditor();

    editor.setCursorBufferPosition([0, 0], { autoscroll: false });
    editor.insertText(file, { select: true });
    editor.setCursorBufferPosition(
      editor.getSelectedBufferRange().end
    );

  }

  getYear() {
    return new Date().getFullYear();
  }
}

module.exports = LicenseGenerator;
