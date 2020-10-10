// load packages...
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();
const inquirer = require('inquirer');
const {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole} = require('./utils/query.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to the database...
const db = new sqlite3.Database('./db/employee.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the employee database.');
})

// Define first set of questions...array of objects...
const mainOptions = [
    'View all Departments',
    'View all Roles',
    'View all Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Exit Program'
];

const mainPrompt = [
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: mainOptions
    }
];


function handleResponse(selection) {
    console.log("Hey good choice, you chose: ");
    switch (selection) {
        case mainOptions[0]:
            console.log(mainOptions[0]);
            viewDepartments(db);
            break;
        case mainOptions[1]:
            console.log(mainOptions[1]);
            viewRoles(db);
            break;
        case mainOptions[2]:
            console.log(mainOptions[2]);
            viewEmployees(db);
            break;
        case mainOptions[3]:
            console.log(mainOptions[3]);
            addDepartment(db);
            break;
        case mainOptions[4]:
            console.log(mainOptions[4]);
            addRole(db);
            break;
        case mainOptions[5]:
            console.log(mainOptions[5]);
            addEmployee(db);
            break;
        case mainOptions[6]:
            console.log(mainOptions[6]);
            updateEmployeeRole(db);
            break;
        case mainOptions[7]:
            console.log(mainOptions[7]);
            db.close();
            return;
    }   
    init();
};

function init() {
    inquirer.prompt(mainPrompt)
    .then(ans => handleResponse(ans.selection));
}

init();
