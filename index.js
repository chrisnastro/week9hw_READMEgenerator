// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution information:",
    },
    {
        type: "input",
        name: "test",
        message: "Enter test information:",
    },
    {
        type: "list",
        name: "license",
        message: "Select the project license:",
        choices: ["MIT License", "Apache License", "GNU General Public License", "Mozilla Public License", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub Profile URL:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
