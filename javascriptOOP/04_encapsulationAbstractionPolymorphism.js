// Encapsulation
/* It is toring data in capsules ie restricting direct access to object data */

class BankAccount {
   /*  applying hashtag in fornt of variable makes it private variable

    we can't directly be accessed so we need to create method(function in class) in order to access it */
    #balance = 0;

    deposit(amount) {
        // I can access within the class but nobody outside it can't
        this.#balance += amount;
        return this.#balance // we can get to know balance but not modify it outside class
    };

    getBalance() {
        return `$ ${this.#balance}`
    };
};

let account = new BankAccount();
// depositing money
account.deposit(100);

// undefined because it is not accessible
console.log(account.balance);

// syntax error because #balance cannot be a variable #var_name is especially provided to private variables only see naming rule in notes
try {
    eval('console.log(account.#balance)');
} catch(e) {
    console.log("Syntax Error: can't use that here #balance can't be name of variable");
};

// getting balance through method getBalance only
console.log(account.getBalance())

/* 
Abstraction
giving customer just result/function that he can use and not whole code/process or backstage machinery
*/

class CoffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting machine`
    };

    brewCoffee() {
        // complex mechanism
        return 'brewing coffee'
    };

    pressStartButton() {
        console.log(this.start(),this.brewCoffee());
    }
};

let myMachine = new CoffeeMachine();

console.log(myMachine.start());
console.log(myMachine.brewCoffee());

// encapsulate even moe by
myMachine.pressStartButton();

/* Polymorphism 
It means occuring in many different forms
*/
class Bird {
    fly() {
        return 'flying.....'
    };
};

class Penguin extends Bird{
    // see here we modified method inherited from parent class to custom class that doesnt follow parent's property this is polymorphism
    fly() {
        return "penguins can't fly....."
    }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

/* Static Method */
class Calculator{
    static add(a,b) {
        return a+b
    };
};

let miniCalc = new Calculator();
try {
    console.log(miniCalc.add(2,3));
}catch(e) {
    console.log('Type Error: add method is not defined in miniCalc because it is static');
};
// inorder to use it call class Calculator directly instead of object it is useful if we don't want objects/children of class to inherit method
console.log(Calculator.add(2,3));
