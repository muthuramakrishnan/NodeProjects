"use strict";

const Employee = require("./Employee")

class Manager extends Employee {
  constructor(firstName, lastName, phone, yoe, avgStockPrice) {
    super(firstName, lastName, phone);
    this.yoe = yoe;
    this.avgStockPrice = avgStockPrice;
  }

  getYOE() {
    return this.yoe;
  }

  getAvgStockPrice() {
    return this.avgStockPrice;
  }

  computeSalary(){
    return this.yoe * this.avgStockPrice;
  }
}

module.exports = Manager;
