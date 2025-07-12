// Semicolon is optional nowadays

// -------------Print text on console------------
console.log('Hello World');
// process can't be shown in browser
process.stdout.write('hi \n'); //std means standardoutput and \n means next line

/*Difference in console.log vs process.stdout.write */
console.log('first line');
console.log('second line');

process.stdout.write('first word');
process.stdout.write('second word in same line \n');

// represent data of json in table form
console.table({ city: 'Jaipur'});

console.warn('warning'); //visible only in browser

// ------------------Data types------------------

// String
var x = 'This is string';

// Number
var y = 99;

// Boolean
var z = true;

// BigInt

// Undefined (we haven't assigned value to it)
var k;
console.log(k);

// null (we defined it but we ourselves said it to have nothing)
var j = null;
console.log(j)

// Object
let m = [1,2,3,4]
let n = {a:1,b:2,c:3}

console.log(m);

// symbol


//this is comment
/* This is multi line comment */

/**
 * 	• var is function-scoped (or globally scoped if declared outside a function), meaning it is accessible anywhere within the function it is declared in. It does not have block scope, so it ignores curly braces outside of functions145611.
	• let and const are block-scoped, meaning they are only accessible within the nearest set of curly braces (block) where they are declared (such as inside a loop or if statement)145611.

 */

var global_var = 'global';

function print_global_var() {
    console.log(global_var)
}

print_global_var()

function print_function_var() {
    var function_var = 'function';
    console.log(function_var)
}

print_function_var()

function print_function_var_b() {
    console.log(function_var)
}
// print_function_var_b() //not defined

let global_let = 'global';

function print_global_let() {
    console.log(global_let)
}

print_global_let()

function print_function_let() {
    let function_let = 'function';
    console.log(function_let)
}

print_function_let()

function print_function_let_b() {
    console.log(function_let)
}
// print_function_let_b() //not defined it also functions same as var so as const too


//but the difference is
//let can't access outside loop
for (let i = 0; i<9; i++) {
    let a = 1;
    a+= 1;
}
// console.log(a) //not defined

// var can be accessed outside loop
for (let i = 0; i<9; i++) {
    var b = 1;
    b+= 1;
}
console.log(b)

// const can't be modified and redeclared, let can be modified but cant be redeclared and var can both redeclared and modified

var x = 5;
x = 4;
console.log(x);
// let x = 6; //error
// console.log(x);

y = 6;
// y = 7; //error
// console.log(y)

var z = 15;
z = 14;
console.log(z);
var z = 16;
console.log(z);

// var doesn't need initialization ie default variables will be var and not let
m = 0;
console.log(m)

// taking user input from command line instead or window prompt
process.stdout.write('Enter something: ');

process.stdin.on('data', function(data) {
    const input = data.toString().trim();
    console.log('You entered:', input);
    process.exit(); // End the process after one input
});

// taking multiple inputs it won't work if above code is enabled
let counter = 0;

process.stdout.write('Enter something: ');

process.stdin.on('data', function(data) {
    const input = data.toString().trim();
    console.log('You entered:', input);
    counter += 1;
    if (counter >= 5) {
        process.exit(); // End process after 5 inputs
    } else {
        process.stdout.write('Enter something: ');
    }
});

//more corrected form
const mode = process.argv[2]; // Get the mode from command-line arguments

if (mode === 'single') {
    // Single input mode
    process.stdout.write('Enter something: ');
    process.stdin.on('data', function(data) {
        const input = data.toString().trim();
        console.log('You entered:', input);
        process.exit();
    });
} else if (mode === 'multi') {
    // Multiple input mode
    let counter = 0;
    process.stdout.write('Enter something: ');
    process.stdin.on('data', function(data) {
        const input = data.toString().trim();
        console.log('You entered:', input);
        counter += 1;
        if (counter >= 5) {
            process.exit();
        } else {
            process.stdout.write('Enter something: ');
        }
    });
} else {
    console.log('Usage: node script.js [single|multi]');
    process.exit();
}

// get mode of start
// I typed node 01_jasBasics.js lol1 lol2
const data1 = process.argv[2];
const data2 = process.argv[3];
console.log(data1,data2) // prints lol1 lol2