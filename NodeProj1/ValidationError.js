/**
 * 
 * @param {string} message 
 */
function ValidationError(message){
    Error.call(this, message);
    this.name = "ValidationError";
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ValidationError);
    }
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

module.exports = ValidationError;