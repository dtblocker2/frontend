// Functions are containers of informations/set of code to execute on calling it

function greet(name) { //here name is parameter
    console.log(`hello ${name}`);
};

greet('dtblocker'); // argument is passed in place of parameter

// returning and storing values
function makingtea(tea) {
    return `making the ${tea}`
};

console.log(makingtea('chai'));
var x = makingtea('green tea');
console.log(x);

// create function inside function
function orderTea(tea){
    function confirmOrder() {
        return 'order confirmed'
    }

    console.log(confirmOrder(),'of the',tea)
}

orderTea('oolong tea')

// but we can't call the inside function outside
try {
    confirmOrder()
} catch(e) {
    console.log("Reference Error: can't call function inside other functioon outside its variable scope")
}

/* ---------- Arrow function -------------- */

var greet2 = (user) => {
    return `hello ${user}`
};

var x= greet2('dtblocker');
console.log(x);

//this is help ful to write on line codes
const calculateTotal = (price, quantity) => price*quantity //notice there is no return as one line code is implicitly returnong result

var x = calculateTotal(200,40)
console.log(x)

/* context of function */
function testOne() {
    console.log(this)
};

testOne(); //it dpesn't work here(undefined) but works on browser

const testTwo = () => {
    console.log(this)
};

testTwo(); //it dpesn't work here(undefined) but works on browser