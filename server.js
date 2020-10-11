// load packages...
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole} = require('./utils/query.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to the database...
// const db = new sqlite3.Database('./db/employee.db', err => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the employee database.');
// })
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'NeilPeart20',
    database: 'employee'
});


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


async function handleResponse(selection) {
    switch (selection) {
        case mainOptions[0]:
            await viewDepartments(db);
            break;
        case mainOptions[1]:
            await viewRoles(db);
            break;
        case mainOptions[2]:
            await viewEmployees(db);
            break;
        case mainOptions[3]:
            await addDepartment(db);
            break;
        case mainOptions[4]:
            await addRole(db);
            break;
        case mainOptions[5]:
            await addEmployee(db);
            break;
        case mainOptions[6]:
            await updateEmployeeRole(db);
            break;
        case mainOptions[7]:
            db.end();
            return;
    }   
    init();
};

function init() {
    inquirer.prompt(mainPrompt)
    .then(ans => handleResponse(ans.selection));
}

init();
