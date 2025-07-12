function makeTea(typeOfTea){
    return `making ${typeOfTea}`
};

function processTeaOrder(func1) {
    return func1('earl grey')
};

var x = processTeaOrder(makeTea);
console.log(x);

function createTeaMaker() {
    return function (teaType) {
        return `making ${teaType}`
    }
}

let teaMake = createTeaMaker()
console.log(teaMake('oolong tea'))

/* Functions DO get access to global variables.
Inner functions ALSO get access to their parent function's variables (closure). */

let global_var = 'global var';

function parent() {
    let parent_var = 'parent var';
    console.log(global_var)

    return function () {
        console.log(parent_var);
        console.log(global_var)
    }
}

let k = parent();
k()