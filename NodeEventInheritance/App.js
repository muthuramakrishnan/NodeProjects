const EventEmitter = require("events");
const util = require("util");

function Greetr() {
  EventEmitter.call(this);
  this.greeting = "Hello world!";
}

util.inherits(Greetr, EventEmitter);

// Greetr.prototype = Object.create(EventEmitter.prototype);
// Greetr.prototype.constructor = EventEmitter;

Greetr.prototype.greet = function () {
  console.log(this.greeting);
  this.emit("greet");
};

const greetr = new Greetr();
greetr.on("greet", function () {
  console.log("Someone Greeted!");
});

greetr.greet();
