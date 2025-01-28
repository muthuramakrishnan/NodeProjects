const Employee = require("./Employee");

const validEmployee = Employee.createEmployee("Manager", "Muthu", "Krish", 123, 1, 2);
console.log("created valid employee", validEmployee, validEmployee.computeSalary());


// const invalidEmployee = Employee.createEmployee("Manager", " ", "21", 123, 1, 2);
// console.log("invalidEmployee", invalidEmployee);
