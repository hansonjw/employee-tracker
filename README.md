# Employee Tracker
Employee database management interface program

## Application and User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options:
  
  ### - view all departments -- 
      WHEN I choose to view all departments
      THEN I am presented with a formatted table showing department names and department ids
  
  ### - view all roles --
      WHEN I choose to view all roles
      THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  
  ### - view all employees --
      WHEN I choose to view all employees
      THEN I am presented with a formatted table showing employee data, including employee ids,
      first names, last names, job titles, departments, salaries, and managers that the employees report to
      
  ### - add a department -- 
      WHEN I choose to add a department
      THEN I am prompted to enter the name of the department and that department is added to the database
  
  ### - add a role --
      WHEN I choose to add a role
      THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      
  ### - add an employee --
      WHEN I choose to add an employee
      THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

  ### - update an employee role


## Dependencies:
- You’ll need to use:
- MySQL2 package
- Inquirer package
- console.table package (Links to an external site.) to print MySQL rows to the console.
