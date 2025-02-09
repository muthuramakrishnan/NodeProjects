function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (eventType, eventListener) {
    this.events[eventType] = this.events[eventType] || [];
    this.events[eventType].push(eventListener);
}

Emitter.prototype.emit = function(eventType){
    if(this.events[eventType]){
        this.events[eventType].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;