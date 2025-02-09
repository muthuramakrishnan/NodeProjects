const Emitter = require("./Emitter");

let emitter = new Emitter();
emitter.on('greet', () => {
    console.log("greeted");
})

console.log("Hello everyone");
emitter.emit('greet');