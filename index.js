const inquirer = require('inquirer');
const generateMarkDown = require("./utils/generateMarkDown");
const fs = require('fs');
const path = require('path');

const questions = [
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
        name: "Installation",
        message: " How did you install your project? "

    },
    {
        type: "input",
        name: "usage",
        message: "Whats the Purpose of Your Application? "

    },
    {
        type: "input",
        name: "license",
        message: " What kind of license should your project have? "

    },
    {
        type: "input",
        name: "contributing",
        message: " who helped with this project?  "

    },
    {
        type: "input",
        name: "tests",
        message: " What command was used to run the test? "

    },
    {
        type: "input",
        name: "questions",
        message: " Who should be contacted for the repo? "
    }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// Created Prompt for user to enter in input 
function init() {
    //got code from NPM website https://www.npmjs.com/package/inquirer
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('TestReadMe.md', generateMarkDown({
                ...answers
            }));
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            };
        })

    init()
};

