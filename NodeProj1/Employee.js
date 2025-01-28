const ValidationError = require("./ValidationError");
const Validator = require("./Validator");
/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} phone 
 */
function Employee(firstName, lastName, phone) {
    if (new.target === Employee) {
        throw new Error("Cannot instantitate abstract class");
    }
    this.checkErrors(firstName, lastName, phone);
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

Employee.createEmployee = function (employeeType = "Manager", firstName, lastName, phone, yoe, avgStockPrice) {
    if (employeeType === "Manager") {
        const Manager = require("./Manager"); // Lazy load Manager
        return new Manager(firstName, lastName, phone, yoe, avgStockPrice);
    }
    return null;
}

/**
 * 
 * @returns {string}
 */
Employee.prototype.getFirstName = function () {
    return this.firstName;
}

/**
 * 
 * @returns {string}
 */
Employee.prototype.getLastName = function () {
    return this.lastName;
}

/**
 * 
 * @returns {number}
 */
Employee.prototype.getPhone = function () {
    return this.phone;
}

Employee.prototype.checkErrors = function (firstName, lastName, phone) {
    let errorObj = {};
    Validator.validateName(firstName, "firstName", errorObj);
    Validator.validateName(lastName, "lastName", errorObj);

    let errorMsg = "";
    for (const [key, value] of Object.entries(errorObj)) {
        errorMsg += value + "\n";
    }

    if (errorMsg.length > 0) {
        throw new ValidationError(errorMsg);
    }
}

Employee.prototype.computeSalary = function(){
    return 1000;
}

module.exports = Employee;

