/* Closures in js */
// closures are function that can remember the environment they are created ie they can retain variables declared outside function

function outer() {
    let counter = 0;
    return function() {
        counter++;
        return counter
    }
};

let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

/* output is 
1
2
3
4
counter never forget is value even after increment is called but if we initialised counter in return function of outer ie increment in this case then counter would have reset to 0

after initialized in outer() counter value can only be acccessed and change by increment and not by other function like below

*/

function increment2() {
    counter++;
    console.log(counter);
};

try {
    increment2();
}catch(e) {
    console.log('Reference Error: counter is not defined in increment2 it is only accessible by return function of outer ie in this case increment()')
}
