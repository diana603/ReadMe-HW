let inquirer = require('inquirer');
const generateMarkDown = require("./utils/generateMarkDown");

const questions = [

];

function writeToFile(fileName, data) {
}
// Created Prompt for user to enter in input 
function init() {
    //got code from NPM website https://www.npmjs.com/package/inquirer
    inquirer
        .prompt([
            {
                type: "input",
                name: "userName",
                message: " Please Enter User Name "
            },
            {
                type: "input",
                name: "title",
                message: " Please Enter Name Of Project "

            },
            {
                type: "input",
                name: "description",
                message: " Descripe Your Project "

            },
            {
                type: "input",
                name: "tableOfContents",
                message: "????"

            },
            {
                type: "input",
                name: "Installation",
                message: " ? "

            },
            {
                type: "input",
                name: "usage",
                message: " ????"

            },
            {
                type: "input",
                name: "license",
                message: " ????? "

            },
            {
                type: "input",
                name: "contributing",
                message: " ??? "

            },
            {
                type: "input",
                name: "tests",
                message: " ??? "

            },
            {
                type: "input",
                name: "questions",
                message: " ??? "

            }
        ])
        .then(answers => {
            generateMarkDown(answers);
            console.log(answers);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

init();
// Fs.file this will save the file. use a string inside the file i'm creating
//check right files. 
