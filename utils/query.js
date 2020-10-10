function viewDepartments(db) {
    const sql = `SELECT
                    dep_name AS Department,
                    id AS 'Department ID'
                FROM
                    departments;`
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
    return;
    }
        console.log(rows);
    });
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
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
    return;
    }
        console.log(rows);
    });
};


function viewEmployees(db) {

    const sql = `SELECT E.id,
                    E.first_name,
                    E.last_name,
                    roles.title,
                    roles.salary,
                    departments.dep_name,
                    M.first_name AS manager_firstname,
                    M.last_name AS manager_lastname
                FROM employees E, employees M
                LEFT JOIN roles ON
                    E.role_id = roles.id
                LEFT JOIN departments ON
                    roles.department_id = departments.id
                WHERE E.manager_id = M.id;`;
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
    return;
    }
        console.log(rows);
    });
};


// ADD A DEPARTMENT
function addDepartment(db) {
    const sql = `INSERT INTO departments (dep_name)
    VALUES (?);`;
    const params = ['ElectricLadyLand2'];

    db.run(sql, params, function (err, res) {
        if (err) {
            // res.status(400).json({ error: err.message });
            return;
        }
    });
};


// ADD A ROLE
function addRole(db) {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?);`;
    const params = ['Lead Guitarist', 1000000, 1];

    db.run(sql, params, function (err, res) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
    });
};


// ADD AN EMPLOYEE
function addEmployee(db) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?);`;
    const params = ['Jennifer', 'Aniston', 1, 1];

    db.run(sql, params, function (err, res) {
        if (err) throw err;
        console.log("employee added");
    });
};


// UPDATE AN EMPLOYEE
function updateEmployeeRole(db) {
    // query database array of employees
    // query database for array of roles
    // list of questions for 
    console.log("This is the employee update function!");
}


//modules for use in other code
module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole}
