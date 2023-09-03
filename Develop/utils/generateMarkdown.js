// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseChoices =['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0'];
const licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen'];
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README This will most likely be like copying a raw readme with # marks
function generateMarkdown = ({ title, description, installation, usage, license, guidelines, test, github, email }) =>
          // const choiceIndex = licenseChoices.indexOf(license)
          // console.log(licenseColor[choiceIndex])

`# ${title}
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
![](https://img.shields.io/badge/License-${licenseColor[licenseChoices]}.svg)
# Contribution-Guidelines
${guidelines}
# Test
${test}
# Questions
${github}
${email}`;

module.exports = generateMarkdown;