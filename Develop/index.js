// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const licenseChoices =['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2,0']
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'lsit',
        message: '',
        choices: licenseChoices,
        name: 'license',
    },
    {
        type: 'input',
        message: '',
        name: '',
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