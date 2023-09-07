// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenseChoices = ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0'];

// TODO: Create an array of questions for user input
const questions =[
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
        message: 'Please say how to contribute to this project which includes reporting issues.',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'test',
    },
    {
        type: 'lsit',
        message: 'Choose all licenses that apply to this project:',
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
]

// TODO: Create a function to write README file This might be like lines 50-56 in the mini project
function writeToFile(filename, data) {

    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log('Thanks for the input! Checkout your README.'));
};
//   TODO: Create a function to initialize app
  function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            const data = generateMarkdown(response);

            writeToFile('README.md', data, (err) =>
                err ? console.log(err) : console.log('Thanks for the input! Checkout your README.'))
        });
    };
  // Function call to initialize app
  init();

//       writeToFile("Readme.md", generateMarkdown({ ... }));
//     });
// fs.writeFile('user_info.html', htmlContent, err => {
//     if (err) {
//       console.error('Error writing HTML file:', err);
//     } else {
//       console.log('HTML file created successfully!');
//     }
//   });
// })
// .catch(error => {
//   console.error('An error occurred:', error);
// });
// function writeToFile(fileName, data) {
//     fs.writeFile(path.join(process.cwd(), fileName), data);
// }

// }


// const licenseColor = [

// ]