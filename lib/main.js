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
    },
    professionalIdentification: {
      type: "string",
      default: "<PROFESSIONAL IDENTIFICATION>",
      description: "A professional description of yourself. Such as 'Dr.' or 'Engineer'."
    },
    url: {
      type: "string",
      default: "<URL>",
      description: "A URL that relates to you. Such as a professional website, or blog."
    },
    promotionalSlogan: {
      type: "string",
      default: "<PROMOTIONAL SLOGAN>",
      description: "A promotional slogan for yourself, or your work."
    }
  }
};
