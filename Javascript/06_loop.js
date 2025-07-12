/* --------------while loop---------------- */
let sum = 0;
let i = 0;
// syntax errors cant be caught using try catch block we need to use eval() and pass string of code
try{
    eval("while (let j = 0, j++, j <= 5) {sum += j;console.log(sum,j)}; ")
} catch(e) {
    console.log("you can't define j in while loop unlike for loop")
}

// mtd 1
while (i <= 5) {
    sum += i;
    console.log(sum,i);
    i+=1;
};

// mtd 2
i=0;
sum=0;
while (i++, i <= 5) {
    sum += i;
    console.log(sum,i);
};

// mtd 3
i=0;
sum=0;
while (i++, i <= 5) {sum += i;console.log(sum,i)};

/* do...while Loop
Executes the block first, then checks the condition.

The loop body always executes at least once, even if the condition is false initially.
so code runs atleast 1 time */
let j = 0;
do {
    console.log("do...while loop:", j);
    j++;
} while (j < 3);
// Output: 0, 1, 2

//while loop first checks condition then run, so it may run 0 times
let x = 5;
while (x < 5) {
    console.log("while:", x); // Will NOT run
}

do {
    console.log("do...while:", x); // Will run ONCE
} while (x < 5);

/* ----------for loop-------------------- */
// notice for uses ; to separate argument whereas while uses , to separate arguments
for (var m = 0; m < 10; m +=2) {
    console.log(m)
}

/* --------------- for ___ in loop -------------- */
const cityPopulation = {
  Mumbai: 20411000,
  Delhi: 16787941,
  Bangalore: 8443675,
  Hyderabad: 6809970,
  Chennai: 7090000
};

console.log(Object.keys(cityPopulation));
console.log(Object.values(cityPopulation));

for (const key in cityPopulation) {
    console.log(cityPopulation.key); //undefined why is it not returning value associated to keys
    console.log(key);

    //instead use
    console.log(cityPopulation[key]);
}

var arr = ['a','b','c']
for (const i in arr) {
    console.log(i);
    console.log(arr[i]);
}

/* --------------forEach loop ------------------ */
let teas = ['green tea', 'black tea', 'oolong tea', ' chai', 'masala tea'];
teas.forEach((element) => {
    console.log(element)
});

/* --------------------for ___ of loop ------------*/
for (const element of teas) {
    console.log(element)
}

// for in return index of element while for of returns value of element itself
