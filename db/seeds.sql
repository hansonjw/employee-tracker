INSERT INTO departments (dep_name)
VALUES
    ('Engineering'),
    ('Accounting'),
    ('Information Technology'),
    ('Legal'),
    ('Manufacturing'),
    ('Corporate');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Engineer I', 50000, 1),
    ('Engineer II', 60000, 1),
    ('Engineer III', 70000, 1),
    ('Engineering Manager', 100000, 1),
    ('Technician', 30000, 1),
    ('Lawyer', 80000, 4),
    ('Law Clerk', 40000, 4),
    ('Legal Aid', 50000, 4),
    ('IT Technician', 30000, 3),
    ('IT Manager', 70000, 3),
    ('Manufacturing Technician', 25000, 5),
    ('Manufacturing Manager', 70000, 5),
    ('Accountant', 40000, 5),
    ('Accounting clerk', 30000, 5),
    ('CEO', 1, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
        ('Taylor', 'Swift', 1, 3),
        ('Stevie', 'Vaughan',2,3),
        ('John', 'Petrucci',3,4),
        ('Joe', 'Satriani',4,19),
        ('Lari', 'Brasilo',2,4),
        ('John', 'Mayer',2,4),
        ('Steve','Morse',3,3),
        ('John','Myung',2,5),
        ('James','Labrie',3,5),
        ('Jordan','Rudess',6,3),
        ('Geddy','Lee',8,5),
        ('Neil','Peart',7,3),
        ('Alex','Lifeson',12,5),
        ('Steve','Vai',1,3),
        ('Gretchen','Menn',9,4),
        ('Steve','Lukather',4,3),
        ('Dominic','Miller',12,5),
        ('Gordon','Sumner',14,3),
        ('Al','Dimeola',13,5), 
        ('Annie', 'Thorisdottir',15,19),
        ('Katy', 'Perry', 12, 19);


