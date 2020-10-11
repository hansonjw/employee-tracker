const inquirer = require('inquirer');
const cTable = require('console.table');
const { response } = require('express');

function viewDepartments(db) {
    const sql = `SELECT
                    dep_name AS Department,
                    id AS 'Department ID'
                FROM
                    departments;`

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('\n');
        console.log(cTable.getTable(result));
    });
    return;
};


function viewRoles(db) {
    const sql = `SELECT
                    roles.title AS 'Position',
                    roles.id AS 'Position ID',
                    departments.dep_name AS 'Department',
                    roles.salary AS 'Salary'
                FROM roles
                LEFT JOIN departments ON
                    roles.department_id = departments.id;`

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('\n');
        console.table(result);
    });
    return;
};


function viewEmployees(db) {

    const sql = `SELECT
                    E.id,
                    E.first_name,
                    E.last_name,
                    roles.title,
                    roles.salary,
                    departments.dep_name,
                    M.first_name AS manager_firstname,
                    M.last_name AS manager_lastname
                FROM
                    employees E
                INNER JOIN employees M ON
                    E.manager_id = M.id
                LEFT JOIN roles ON
                    E.role_id = roles.id
                LEFT JOIN departments ON
                    roles.department_id = departments.id;`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('\n');
        console.table(result);
        return;
    });
};


// ADD A DEPARTMENT
function addDepartment(db) {
    const sql = `INSERT INTO departments (dep_name) VALUES (?);`;
    const params = ['Electric Ladyland 5'];
    db.query(sql, params, (err, result) => {
        if (err) throw err;
    });
};


// ADD A ROLE
function addRole(db) {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?);`;
    const params = ['Lead Guitarist', 1000000, 1];

    db.query(sql, params, (err, result) => {
        if (err) throw err;
    });
};


// ADD AN EMPLOYEE
async function addEmployee(db) {
    const managerList = {};
    const roleList = {};

    let managerData = await db.promise().query(`SELECT * FROM employees;`);
    managerData[0].forEach(manager => managerList[manager.first_name + ' ' + manager.last_name] = manager.id);

    let roleData = await db.promise().query('SELECT * FROM roles');
    roleData[0].forEach(role => roleList[role.title] = role.id);

    let firstName = await inquirer.prompt([
        {
            type: 'input',
            name: 'selection',
            message: 'What is the first name of the new employee?',
            default: 'TBD'
        }
        ]);
    let lastName = await inquirer.prompt([
        {
            type: 'input',
            name: 'selection',
            message: 'What is the last name of the new employee?',
            default: 'TBD'
        }
        ]);
    let answerManager = await inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Who shall be the manager of this new employee?',
            choices: Object.keys(managerList)
        }
        ]);
    let answerRole = await inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'What new role will this new employee have?',
            choices: Object.keys(roleList)
        }
        ]);

    console.log(firstName.selection, lastName.selection, roleList[answerRole.selection], managerList[answerManager.selection]);

    
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?);`;
    
    // build logic for employee selection - first_name, last_name, ROLE, Manager

    const params = [firstName.selection, lastName.selection, roleList[answerRole.selection], managerList[answerManager.selection]];

    await db.promise().query(sql, params, (err, result) => {
        if (err) throw err;
    });
};


// UPDATE AN EMPLOYEE
async function updateEmployeeRole(db) {
    const employeeList = {};
    const roleList = {};
    let employeeData = await db.promise().query(`SELECT * FROM employees;`);
    // if(!employeeData.ok) {
    //     console.log("ERROR");
    // } else{
    //     employeeData[0].forEach(employee => employeeList[employee.first_name + ' ' + employee.last_name] = employee.id);
    // }
    employeeData[0].forEach(employee => employeeList[employee.first_name + ' ' + employee.last_name] = employee.id);

    let roleData = await db.promise().query('SELECT * FROM roles');
    // if(!roleData.ok) {
    //     console.log("ERROR");
    // } else{
    //     roleData[0].forEach(role => roleList[role.title] = role.id);
    // }
    roleData[0].forEach(role => roleList[role.title] = role.id);

    let answerEmployee = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Which employee would you like to update?',
                    choices: Object.keys(employeeList)
                }
                ]);
    let answerRole = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Which new role should this employee have?',
                    choices: Object.keys(roleList)
                }
                ]);
    console.log(employeeList[answerEmployee.selection], roleList[answerRole.selection]);
   
    const sql = `UPDATE employees SET role_id = (?) WHERE id = (?);`;
    params = [roleList[answerRole.selection], employeeList[answerEmployee.selection]]
    await db.promise().query(sql, params, (err, result) => {
        if (err) throw err;
    });
}


//modules for use in other code
module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole}
