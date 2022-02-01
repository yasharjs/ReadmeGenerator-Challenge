// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {promises} = require('dns');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message:'Enter your email'
    },

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
         name:'usage',
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
function writeToFile(fileName, data) {
   // console.log(fileName, data);
   //initialize file path
   const filePath = "./dist/" + fileName +"/README.md";

   //promise
   return new Promise((resolve,reject)=>{
       //if folder doesn't exist, create new folder
       if(!fs.existsSync("./dist/" + fileName)){
           fs.mkdirSync("./dist/" +fileName, {recursive : true});
       }

       fs.writeFile(filePath, generateMarkdown(data), err=> {
           // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method   
           if(err){
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;  
            }

            //if everything went well
            resolve({
                ok:true,
                message: 'File created'
            });
       });
   });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        {type:'input',
        name: 'title',
        message:'enter title'}
    ).then(answers => writeToFile(answers.title,answers))

   
}

// Function call to initialize app
init();