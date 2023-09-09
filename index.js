// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is you project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please give installation instructions so others can use this.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Describe the usage of this project such as technologies or packages used.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please say how to contribute to this project which includes reporting issues.",
    name: "guidelines",
  },
  {
    type: "input",
    message: "What are the test instructions for this project?",
    name: "test",
  },
  {
    type: "input",
    message: "PLease enter your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter you email.",
    name: "email",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Open",
    ],
  },
];
// TODO: Create a function to write README file This might be like lines 50-56 in the mini project
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
  console.log("Thanks for the input! Checkout your README.");
}
//   TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile(
      "README.md",
      generateMarkdown({
        ...answers,
      })
    );
  });
}

// Function call to initialize app
init();
