/* Common JS and Module Importing and exporting */

// exporting using CommonJs
const developer = 'dtblocker';

function add(a,b) {
    return a + b
}

function sub(a,b) {
    return a - b
}


function multiply(a,b) {
    return a * b
}

// exports object containing function or variables
module.exports = {
    add,
    sub,
    multiply,
    developer,
}
