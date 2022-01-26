// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project' 
     },
     {
         type: 'input',
         name: 'description',
         message: 'Write a description for your project'
     },
     {
         type:'input',
         name:'installation',
         messgae: 'Write the installation instructions for your project'
     },
     {
         type:'input',
         name:'uses',
         message:'Describe how to use your project'
     },
     {
         type:'input',
         name:'guidelines',
         message:'Write the contribution guidelines for your project'
     },
     {
         type: 'input',
         name:'test',
         message:'Write the test instructions for your project?',
 
     },
     {
         type: 'list',
         name:'license',
         message:'Which license do you wish to use for your project?',
         choices: [
             "None",
             "GNU AGPLv3",
             "GNU GPLv3",
             "GNU LGPLv3",
             "Mozilla Public License 2.0",
             "Apache License 2.0",
             "MIT License",
             "Boost Software License 1.0",
             "The Unlicense",
             ]
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(answers => console.log(answers))
}

// Function call to initialize app
init();