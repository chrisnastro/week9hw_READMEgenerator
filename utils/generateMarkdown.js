// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Puplic License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Puplic License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Mozilla Public License 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License:
  Utilized with permissions from the ${license} license.
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description:
${data.description}

## Installation Instructions:
${data.installation}

## Usage Instructions:
${data.usage}

## Contribution Guidlines"
${data.contribution}

## Test Instructions:
${data.test}

${renderLicenseSection(data.license)}

## Questions:
For questions or feedback please email [${data.email}](mailto:${data.email}) or contact via GitHub [${data.github}](https://github.com/${data.github}).

© 2024 Confidential and Proprietary. All Rights Reserved.`;
}

module.exports = generateMarkdown;
