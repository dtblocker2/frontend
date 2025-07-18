/* Prototypal inheritence */
// inheritance being done in form of prototypes instead of classes

function Person(name) {
    this.name = name;
};

Person.prototype.greet = function() {
    console.log(`Hello my name is ${this.name}`);
};

let dhruva = new Person('dtblocker');

dhruva.greet();

