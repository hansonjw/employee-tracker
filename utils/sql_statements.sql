-- EMPLOYEES query
SELECT
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
    roles.department_id = departments.id;



-- DEPARTMENTS query
SELECT
    dep_name AS Department,
    id AS 'Department ID'
FROM
    departments;


-- ROLES query
SELECT
    roles.title AS 'Position',
    roles.id AS 'Position ID',
    departments.dep_name AS 'Department',
    roles.salary AS 'Salary'
FROM roles
LEFT JOIN departments ON
    roles.department_id = departments.id;


-- ADD DEPARTMENT
INSERT INTO departments (dep_name)
VALUES (?);


-- ADD ROLE
INSERT INTO roles (salary, title, department_id)
VALUES (?, ?, ?);
