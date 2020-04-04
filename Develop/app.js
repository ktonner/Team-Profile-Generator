const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const renderArray = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function init() {
    inquirer.prompt(
        {
            type: "list",
            message: "What is your employee's role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "list"
        }).then(answer => {
            if (answer.list == "Manager") {
                newManager()
            }
            else if (answer.list == "Engineer") {
                newEngineer()
            }
            else if (answers.list == "Intern") {
                newIntern()
            }
        })
}


//question branch for manager

function newManager() {
    console.log("Manager")
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is your employee's name?",
                name: "name"
            },
            {
                type: "input",
                message: "Enter your employee's id number.",
                name: "id"
            },
            {
                type: "input",
                message: "What is your employee's email?",
                name: "email"
            },
            {
                type: "input",
                message: "Enter their office number.",
                name: "office"
            }]
    ).then(answers => {
        try {
            console.log(answers)
            renderArray.push(new Manager(answers.name, answers.id, answers.email, answers.office))
            console.log(renderArray)
            fs.writeFile(outputPath, render(renderArray), err => {
                throw err
            })
        }
        catch (err) {
            console.log(err)
        }
    })
}

//branch for engineer 

function newEngineer() {
    console.log("Engineer")
    inquirer.prompt([
        {
            type: "input",
            message: "What is your employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your employee's id number.",
            name: "id"
        },
        {
            type: "input",
            message: "What is your employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Enter their github username.",
            name: "githubUser"
        }]
    ).then(answers => {
        try {
            console.log(answers)
            renderArray.push(answers)
            console.log(renderArray)
        }
        catch (err) {
            console.log(err)
        }
    })
}

//branch for intern

function newIntern() {
    console.log("Intern")
    inquirer.prompt([
        {
            type: "input",
            message: "What is your employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your employee's id number.",
            name: "id"
        },
        {
            type: "input",
            message: "What is your employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Enter their school name.",
            name: "school"
        }
    ]).then(answers => {
        try {
            console.log(answers)
            renderArray.push(answers)
            console.log(renderArray)
        }
        catch (err) {
            console.log(err)
        }
    })
}

init()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!