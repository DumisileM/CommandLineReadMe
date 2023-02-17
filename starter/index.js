const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let licenses = ['MIT','Apache 2.0 License','Eclipse Public License 1.0']
// array of questions for user

const questions = () => inquirer
.prompt([
    {
        type:"confirm",
        name:"intro",
        message:"We're about to make a ReadMe using a commandline.\nPlease note that pressing ENTER will submit your input so, separate your input with commas when you are instructed to. \n READY? ",
    },
    {
        type:"input",
        name:"title",
        message:"What is the title of the project?",
    },
    {
        type:"input",
        name:"description",
        message:"Enter project description: ",
    },
    {
        type:"input",
        name:"installation",
        message:"Enter installation instructions (separated by commas): ",
        filter: function(val) {
            return val.split(',')
        }
    },
    {
        type:"input",
        name:"usage",
        message:"Enter usage instructions: ",
    },
    {
        type:"list-input",
        name:"license",
        message:"Pick the license name from this list: ",
        choices: licenses
    },
    {
        type:"input",
        name:"contributing",
        message:"Enter contributions guidelines: ",
    },
    {
        type:"input",
        name:"tests",
        message:"Enter instructions on how to test the application: ",
    },
    {
        type:"input",
        name:"github",
        message:"Enter your github username: ",
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address: ",
    },





]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    questions()
}

// function call to initialize program
init();
