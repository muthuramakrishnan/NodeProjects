const Employee = require("./Employee");
const Manager = require("./Manager");

const firstName = "Muthu"
const lastName = "Krish"
const phone = 123
const yoe = 1;
const avgStockPrice = 100

const manager = new Manager()
console.log(manager, manager.computeSalary())