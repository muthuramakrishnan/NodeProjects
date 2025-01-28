const Employee = require("./Employee");

/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} phone 
 * @param {number} yoe 
 * @param {number} avgStockPrice 
 */
function Manager(firstName, lastName, phone, yoe, avgStockPrice) {
    Employee.call(this, firstName, lastName, phone);
    this.yoe = yoe;
    this.avgStockPrice = avgStockPrice;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

/**
 * 
 * @returns {number}
 */
Manager.prototype.computeSalary = function () {
    // Call Employee's computeSalary
    const baseSalary = Employee.prototype.computeSalary.call(this);

    // Add Manager-specific computation
    return baseSalary + this.yoe * this.avgStockPrice;
}

module.exports = Manager;