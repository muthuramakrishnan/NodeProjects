"use strict";

class Employee {
  constructor(firstName, lastName, phone) {
    if(new.target === Employee){
        throw new Error("Cannot instantiate abstract class");
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  static createEmployee(
    employeeType = "Manager",
    firstName,
    lastName,
    phone,
    yoe,
    avgStockPrice
  ) {
    if (employeeType === "Manager") {
      const Manager = require("./Manager");
      return new Manager(firstName, lastName, phone, yoe, avgStockPrice);
    }
    return null;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getPhone() {
    return this.phone;
  }

  computeSalary(){
    throw new Error("computeSalary is not implemented");
  }
}

module.exports = Employee;
