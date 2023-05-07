const LicenseGenerator = require("./license-generator.js");

let licenseGenerator = null;
module.exports = {
  activate: () => {
    licenseGenerator = new LicenseGenerator();
  },
  deactivate: () => {
    if (licenseGenerator !== null) {
      licenseGenerator.deactivate();
    }
  },
  config: {
    name: {
      type: "string",
      default: "<NAME>",
      description: "Name to show in the generated licenses."
    },
    email: {
      type: "string",
      default: "<EMAIL>",
      description: "Email to show in the generated licenses."
    }
  }
};
