// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseChoices =['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0'];

function renderLicenseBadge(license) {
    if (license === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (license === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README This will most likely be like copying a raw readme with # marks
function generateMarkdown({ title, description, installation, usage, license, guidelines, test, github, email }) {
    const licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen']; 
            const choiceIndex = licenseChoices.indexOf(license)
            console.log(licenseColor[choiceIndex])
           return `
            # ${title}
# Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution-Guidelines](#guidelines)
[Test](#test)
[Questions](#questions)
# Description
${description}
# Installation
${installation}
# Usage
${usage}
# License
${renderLicenseBadge(data.license)}
This application is covered by the ${data.license} license. 
# Contribution-Guidelines
${guidelines}
# Test
${test}
# Questions
${github}
${email}`};

module.exports = generateMarkdown;