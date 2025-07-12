// Handling data in js

// Number
let balance = 120;
console.log(balance);
console.log(typeof balance);

// converting Primitive to Non-primitive data type so in java everything is an object
let balance2 = new Number(120);
console.log(balance2);
console.log(balance2.valueOf());
console.log(typeof balance2);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

// Undefined and null
var i = undefined;
console.log(k);
var k;
console.log(k);
var j = null;
console.log(j)

// String
let mystring = 'hello';
let mystring2 = "hola";
let username = 'dtblocker';
let username2 = new String('dtblocker');
let mystring3 = `hi`;

// old way
console.log('hi '+ username2.valueOf())
console.log('hi', username)

// String interpolation new way
console.log(`Hello ${username}`)
console.log(`Value is ${2*2}`)

// Symbol make exactly same value of variables as different
let sm1 = Symbol('dtblocker');
let sm2 = Symbol('dtblocker');

console.log(sm1==sm2);
console.log(sm1);
console.log(sm1.valueOf())
