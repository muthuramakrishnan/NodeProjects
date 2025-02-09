const Emitter = require("events");

const emitter = new Emitter();
emitter.on("greet", function () {
    console.log("Greet Completed");
})

console.log("Greetings");
emitter.emit("greet")