
function Validator() {
}

Validator.nameRegex = /^[a-zA-Z]{3,}$/;

/**
 * 
 * @param {string} name 
 * @param {string} fieldName 
 * @param {Object} errorObj 
 * @returns 
 */
Validator.validateName = function (name = "", fieldName = "", errorObj = {}) {
    if (!Validator.nameRegex.test(name)) {
        errorObj[fieldName] = `${fieldName} should be of at least 3 chars`;
    }
    return errorObj;
}

module.exports = Validator;