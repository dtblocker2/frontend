/* write for loop that stops on getting chai and store every other tea in selectedTeas break statement */
let arr = ['green tea', 'black tea', 'oolong tea', ' chai', 'masala tea'];
var selectedTeas = [];
for (let i = 0; i<arr.length; i++) {
    let k = arr[i];
    if (k.trim() === 'chai') {
        break
    };
    selectedTeas.push(k);
};

console.log(selectedTeas)

/* skip an element continue statement */
let arr2 = ['green tea', 'black tea', 'oolong tea', ' chai', 'masala tea'];
let selectedTeas2 = [];
for (let i = 0; i<arr.length; i++) {
    let k = arr[i];
    if (k.trim() === 'chai') {
        continue
    };
    selectedTeas2.push(k);
};

console.log(selectedTeas2)

/* using break in forEach seems we can't use break in forEch loop only continue is supported */

try {
    eval("let teas = ['green tea', 'black tea', 'oolong tea', ' chai', 'masala tea'];let selectedTeas = [];teas.forEach((element) => {let k = teas[i];if (k.trim() === 'chai') {break};selectedTeas.push(k);});")


    console.log(selectedTeas)
} catch(e) {
    console.log('Syntax Error: cant use break in forEach block')
}

var selectedTeas = [];
teas.forEach(function (element) {
    if (element.trim() === 'chai') {
        return //instead of break use return
    };
    selectedTeas.push(element);
});

console.log(selectedTeas);

/* using continue in forEach loop */

var selectedTeas = [];
teas.forEach((element) => {
    if (element.trim() === 'chai') {
        return
    };
    selectedTeas.push(element);
});

console.log(selectedTeas);

