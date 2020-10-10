// This is some code that I scratched from the server.js file
// I went down this wrong path of writing API calls...I don't think I need
// to do that for this application





// API call for DEPARTMENTS
app.get('/api/departments', (req, res) => {
    // sql statement...
    const sql = `SELECT
                    dep_name AS Department,
                    id AS 'Department ID'
                FROM
                    departments;`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success...here are the departments',
            data: rows
        });
    });
});

// API call for ROLES
app.get('/api/roles', (req, res) => {
    // sql statement...
    const sql = `SELECT
                    roles.title AS 'Position',
                    roles.id AS 'Position ID',
                    departments.dep_name AS 'Department',
                    roles.salary AS 'Salary'
                FROM roles
                LEFT JOIN departments ON
                    roles.department_id = departments.id;`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success...here are the roles',
            data: rows
        });
    });
});


// API call to for EMPLOYEES...
app.get('/api/employees', (req, res) => {
    // sql statement...
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

        res.json({
            message: 'success, here are the employees...',
            data: rows
        });
    });
});



// API call for ADD DEPARTMENT


// API call for ADD ROLE


// API call for ADD EMPLOYEE


// API call for UPDATE EMPLOYEE ROLE






// white a default API response...for uncaught requests

// start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})