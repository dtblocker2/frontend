/* Go to inspect in browser go to console type create any object like array and print (console.log) it on console
After printing it click on dropdown arrow in output to see its prototype layout in our case if arr is [1,2,3] we will get;
(3) [1,2,3] i
0: 1
1: 2
2: 3
length: 3
[[Prototype]]: Array(0)

and if you open up [[Prototype]] arrow dropdown you will get function that we can perform on it works just like python help() command 
*/

// Desingning Prototypes and Objects
// created a computer class with attributes like cpuThreads
let computer = {
    cpuThreads: 12,
};
// lenovo is offering different qualities/attributes
let lenovo = {
    screen: 'HD',
};
// Tom hardware has no idea what to include 
let tomHardware = {};

console.log(computer);

// Dunder Prototype
// __ double underscore is called dunder
console.log('computer', computer.__proto__); //you can't see it in nodejs console but go to webbrowser to see it


/* what is use of it?
Ans- instead of creating 1000 of properties every time just make parent object and use dunder prototype (__proto__) to import into child object */
let dell = {
    screen: '4K',
    __proto__: computer,
}

console.log(dell, dell.__proto__) // in above case of computer.__proto__ we get null but here in dell.__proto__ we get {cpuThreads: 12} because in abpve computer had no dunder prototype to import properties of other object so computer couldn't care to show them in dell we had computer as __proto__ so it showed her

/* also on using console.log(dell) we get only {screen: '4K'} and not {screen: '4K', cpuThreads: 12} why?
See notes for answer: */

let genericCar = {tyres: 4};

let tesla = {
    driver: 'AI',
};

// instead of using __proto__ use below
Object.setPrototypeOf(tesla, genericCar);
// tyre property is not show in her
console.log(tesla)
// though it can access tyres property in genericCar objec
console.log(tesla.tyres, tesla.driver);

/* In order to get access them/show prototype of objects */
console.log(Object.getPrototypeOf(tesla));

// hasOwnProperty()
console.log(tesla.hasOwnProperty('tyres')); // false
console.log(tesla.hasOwnProperty('driver')); // true
