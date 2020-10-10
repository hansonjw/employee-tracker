INSERT INTO departments (dep_name)
VALUES
    ('engineering'),
    ('accounting'),
    ('information technology'),
    ('legal'),
    ('manufacturing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('engineer I', 50000, 1),
    ('engineer II', 60000, 1),
    ('engineer III', 70000, 1),
    ('engineering manager', 100000, 1),
    ('technician', 30000, 1),
    ('lawyer', 80000, 4),
    ('law clerk', 40000, 4),
    ('legal aid', 50000, 4),
    ('it technician', 30000, 3),
    ('it manager', 70000, 3),
    ('manufacturing technician', 25000, 5),
    ('manufacturing manager', 70000, 5),
    ('accountant', 40000, 5),
    ('accounting clerk', 30000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
        ('Joe', 'Volcano', 1, 3),
        ('Stevie', 'Vaughan',2,3),
        ('John', 'Petrucci',9,4),
        ('Joe', 'Satriani',9,19),
        ('John', 'Mayer',10,4),
        ('Steve','Morse',11,3),
        ('John','Myung',2,5),
        ('James','Labrie',3,5),
        ('Jordan','Rudess',6,3),
        ('Geddy','Lee',8,5),
        ('Neil','Peart',7,3),
        ('Alex','Lifeson',12,5),
        ('Steve','Vai',1,3),
        ('Joel','Elliot',2,3),
        ('Steve','Lukather',4,3),
        ('Dominic','Miller',12,5),
        ('Gordon','Sumner',14,3),
        ('Al','Dimeola',13,5), 
        ('Annie', 'Thorisdottir', 7,19),
        ('Katy', 'Perry', 12, 19);


