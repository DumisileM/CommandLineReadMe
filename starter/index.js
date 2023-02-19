const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile);
// inquirer.registerPrompt('list-input', require('inquirer-list-input'));
const generateMarkdown = require("./utils/generateMarkdown");
let licenses = ["MIT","Apache 2.0 License","Eclipse Public License 1.0"]
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
        type:"list",
        name:"license",
        message:"Pick the license name from this list: ",
        choices: licenses,
        filter: function(val){
            if(val== "MIT"){
                
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            } else if( val == "Apache 2.0 License"){
                return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            }else if (val == "Eclipse Public License 1.0"){
                return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
            }
        }
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
    writeFileAsync(fileName,data).then(() => console.log("written successfully... :)")).catch((error)=>console.error(error))
}

// function to initialize program
function init() {
    questions().then((answers)=> {
        if(answers.licenses== 'MIT'){
            
            answers["licenseBadge"] = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        }
    
    writeToFile("README.md",generateMarkdown(answers))
    
})
}

// function call to initialize program
init();
