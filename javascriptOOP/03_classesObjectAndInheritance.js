/* I have studied it in collge but industry dont require you to memorise but to apply the theory */

// we want to create objects that are instances of classes

// declaring object literal
let car = {
    make: 'toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`
    },
};

console.log(car.start());

// using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
};

let john = new Person('john doe', 20);

console.log(john.name);

// prototypal chain
function Animal(type) {
    this.type = type;
};

Animal.prototype.speak = function() {
    return `${this.type} makes sound`
};

// adding custom properties to some predefined prototypes
Array.prototype.dtblocker = function() {
    return `custom method ${this}`
};

let myArr = [1,2,3,4,5];
console.log(myArr.dtblocker());

let myNewArr = [1,2,3];
console.log(myNewArr.dtblocker());


// creating classes(which are actually prototypes under the hood) in js
// here unlike functional constructor we don't provide parameter just along with class name rather we create constructor function in it just like __init__ in python

/* well constructor here is not function rather, as function into class it starts to be known as method */
class Vehicle {
    /* 
    don't use function constructor() {
        --code--
    } 
    */
    constructor(make, model) {
        this.make = make;
        this.model = model;
    };

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

// inheritence
class Car extends Vehicle {
    // making constructor is oprtional make constructor only when you need to give inputs

    // in this case due to inheritence this class will use constructor function of parent class as we have not defined its constructor

    drive() {
        return `the car ${this.make} ${this.model}: This is inheritence example`
    }
};

let myCar = new Car('dodge', 'challeger');
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle('toyota', 'Porche')
console.log(vehOne.start());
try {
    console.log(vehOne.drive());
} catch (e) {
    console.log('drive keyword is not associated to parent class vehicle of car class')
};