// Object
let username = {
    firstName: 'dtblocker',
    isLoggedin: true,
};

console.log(username);
console.log(typeof username)

username = {
    firstName: 'dk',
}
console.log(username)

// changing no of primitives stored in const object is not allowed as it directly affects object
const username2 = {
    firstName: 'dtblocker',
    isLoggedin: true,
};
try {
    username2 = {
        firstName: 'dk',
        lastName: 'majoka',
    };

    console.log(username2)
} catch (e) {
    console.log("const object can't be changed")
};

// but changing values of primitives of const object is allowed as it does not directly affects object
const username3 = {
    firstName: 'dtblocker',
    isLoggedin: true,
};

username3.firstName = 'dk';
username3.isLoggedin = false;
username3.lastName = 'majoka'; // even add new primitive to object

console.log(username3);

// custom names
username3["space between keys"] = 'hey';
console.log(username3);
console.log(username3['firstName']);

// Date object
let today = new Date();
console.log(today);
// wtf does 2025-07-12T14:27:46.352Z mean
console.log(today.getDate(),today.getDay());

// array
let cartoons = ['goku','ben 10','luffy'];
console.log(cartoons);

console.log(cartoons[1]); // access elements

// Type conversions
console.log(1+"1") //11
console.log("1"+1) //11
// JS is smart it tends to covert datatype into best possible way in above case best datatype b/w string and number was string so it converted it to that

// similarly in float and int float is final output
console.log(0.1+1);
console.log(1+true); //here true is coverted to 1 and false to 0

// NaN is 'not a number' it is output when type conversion cant be done to number
console.log(Number('23'));
console.log(Number('23a'));
console.log(typeof Number('23a')); //type of NaN is number

console.log(Number(null)); // it return 0
console.log(Number(undefined)); // it return NaN

// soft copy vs hard copy of arrays in js
let arr = [1,2,3];
let softCopy = arr;
let hardCopy =  [...arr];
let hardCopy2 = arr.slice();

arr.pop();
console.log(softCopy, hardCopy, hardCopy2)

// merging arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let merge1 = arr1+arr2;
console.log(merge1);
console.log(typeof merge1);

let merge2 = [...arr1,...arr2]; // spread arr1 and arr2 and enclose them into array object
console.log(merge2);
console.log(typeof merge2);

let merge3 = arr1.concat(arr2); // or simply use this formula
console.log(merge3);
console.log(typeof merge3);

// Find if element is in array
console.log(arr1.includes(1));
console.log(arr2.includes(1));
console.log(arr1*2); //return NaN

// Creating Long arrays
var poinstStylingArr = Array(299).fill(0).concat([10]); // array with 299 zeros and 10 at end
