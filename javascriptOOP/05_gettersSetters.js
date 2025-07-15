// Getters and Setters
 class Employee{
    #salary;
    //use above to truly hide salary
    constructor(name, salary) {
        this.name = name;
        /* if (salary<0) {
            throw new Error("Salary can't be negative")
        } */

        // underscore doesn't do anything in js unlike in python which would have made it private variable in python
        this._salary = salary;
    };

    get salary() {
        return `You can't access salary by emp.salary though you can use emp._salary to get it`
    };

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary: enter positive value");
        }else {
            this._salary = value;
        }
    }

};

let emp = new Employee('Alice', 50000);
console.log(emp.name);
console.log(emp._salary); // salary will get printed

// after using get and set
console.log(emp.salary) //set we didn't use method ie emp.salary() here just use raw variable name
emp.salary = -1000;

// even though we has setter command to prevent negative values still we can enter negative value during construction of object
// so add a conditon in constructor() method to avoid negatives
let emp2 = new Employee('Bob',-1000);

// what is benefit of getter if we can just apply underscore in front of salary to get its value
console.log(emp2._salary)

/* what we can do is instead of _salary we can use 
#salary no effect to set and get command has to be done both will under satnd it correctly */
