function greet(name) {
    console.log(`Hello ${name}`);
};

// Creating constructor function
function person(name, age){
    // storing variable just like self.name = name in python classes
    this.name = name;
    this.age = age;
};

function Car(make, model) {
    this.make = make;
    this.model = model;
};

// creating object from constructor function
let myCar = new Car('dodge','challenger');
console.log(myCar);

// creating second object
let myNewCar = new Car('Tata','harrier');
console.log(myNewCar);

// other functions can be described in them
function Tea(type) {
    this.type = type;

    this.describe = function() {
        return `this is cup of ${this.type}`;
    };
}

const lemonTea = new Tea('lemon tea');
console.log(lemonTea.describe());

// creating prototypes that child class can inherit
function Animal(species) {
    this.species = species;
};

Animal.prototype.sound = function() {
    return `${this.species} makes sound`
}

let dog = new Animal('dog');
console.log(dog.sound());

let cat = new Animal('cat');
console.log(cat.sound());

function Drink(name) {
    // new.target return true if new keyword is used to create new object from constructor function
    if (!new.target) {
        throw new Error('this is custom error for not use new keyword');
    };

    this.name = name;
    console.log(`${this.name} successfully created`)
};

let cola = new Drink('cola');
let mountainDew = Drink('mountain dew');
