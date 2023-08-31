// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const licenseChoices =['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2,0']
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is you project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please give installation instructions so others can use this.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe the usage of this project such as technologies or packages used.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please add also contributors and sources.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'tests',
    },
    {
        type: 'lsit',
        message: 'Choose all licenses that apply to this project.',
        choices: licenseChoices,
        name: 'license',
    },
    {
        type: 'input',
        message: 'PLease enter your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter you email.',
        name: 'email',
    },
];

// TODO: Create a function to write README file This might be like lines 50-56 in the mini project
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();








const licenseColor = [

]

// / TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const licenseChoices = ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0'];
// // Create a function that uses each section as a parameter then return each section with literals.
// function readme({ title, description, installation, usage, license, guidelines, test, github, email }) {
//     const licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen'];
//             const choiceIndex = licenseChoices.indexOf(license)
//             console.log(licenseColor[choiceIndex])
//     return `
// # ${title}
// # Table of Contents
// [Description](#description)
// [Installation](#installation)
// [Usage](#usage)
// [License](#license)
// [Contribution-Guidelines](#guidelines)
// [Test](#test)
// [Questions](#questions)
// # Description
// ${description}
// # Installation
// ${installation}
// # Usage
// ${usage}
// # License
// ![](https://img.shields.io/badge/License-${licenseColor[choiceIndex]}.svg)
// # Contribution-Guidelines
// ${guidelines}
// # Test
// ${test}
// # Questions
// ${github}
// ${email}
//     `
// }
// // TODO: Create an array of questions for user input
// // I need to create type message and name blocks for each section.
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the title of your project?',
//         name: 'title'
//     },
//     {
//         type: 'input',
//         message: 'What is the description of your project?',
//         name: 'description',
//     },
//     {
//         type: 'input',
//         message: 'What are the installation instructions?',
//         name: 'installation',
//     },
//     {
//         type: 'input',
//         message: 'What is the usage information?',
//         name: 'usage',
//     },
//     // How do i add license badges here? Currently I am trying to just insert the image of the badge link next to the choices.
//     {
//         type: 'list',
//         message: 'What license would you like?',
//         choices: licenseChoices,
//         name: 'license',
//     },
//     {
//         type: 'input',
//         message: 'What are your projects contribution guidelines?',
//         name: 'guidelines',
//     },
//     {
//         type: 'input',
//         message: 'What are the test intructions?',
//         name: 'test',
//     },
//     {
//         type: 'input',
//         message: 'What is your github username and link?',
//         name: 'github',
//     },
//     {
//         type: 'input',
//         message: 'What is your email and how can we reach you?',
//         name: 'email',
//     },
// ]
// // TODO: Create a function to write README file
// // fs.writeFile? with the filename and data as parameters as well as err.
// function writeToFile(filename, data) {
//     fs.writeFile(filename, data, (err) =>
//         err ? console.log(err) : console.log('Thanks for the input! Checkout your README.'));
// };
// // TODO: Create a function to initialize app
// // In this function call inquirer library. Or import. then prompt questions and .then promise the response. set data to readme. call previous function with updated parameters.
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((response) => {
//             console.log(response)
//             const data = readme(response)
//             writeToFile('README.md', data, (err) =>
//                 err ? console.log(err) : console.log('nice'))
//         })
// }
// // Function call to initialize app
// init();
// /**
//      * Any time i choose one of the licenses the corresponding badge pops up.
//      * The licenses I want to choose from are ibm, mit, isc, and mozilla.
//      * https://img.shields.io/badge/License-IPL_1.0-blue.svg
//      * https://img.shields.io/badge/License-MIT-yellow.svg
//      * https://img.shields.io/badge/License-ISC-blue.svg
//      * https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg
//      * Use template literal to equate with each license. keep the rest of the link the same. `https...` + ${color} + `.svg`
//      *
//      * ${blue} = questions.choices[0]
//      * ${yellow} = questions.choices[1]
//      * ${blue} = questions.choices[2]
//      * ${brightgreen} = questions.choices[3]
//      * var color =
//      *
//      *   choices: ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0' ],
//      * licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen']
//      * https://img.shields.io/badge/License- + ${licenseColor} + .svg
//      *
//      * use indexOf() to
//      *
//      * const licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen'];
//    const choices = ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0' ]
//    const userInput = response.choices
//    const choiceIndex = choices.indexOf(userInput)
//    console.log(licenseColor[choiceIndex])
//     */