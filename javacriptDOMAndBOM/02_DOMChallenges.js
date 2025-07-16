/* ------------DOM Manipulation--------------- */
// alert('connected')

// getting ELement
let myParagraph = document.getElementById('myParagraph');
console.log(myParagraph); // always check it in our case it was null first because script was above myParagraph initially ie it wasn't loaded so it returned null

// Event Listening
document.getElementById('changeTextButton').addEventListener('click', () => {
    // changing value/properties of html elements
    myParagraph.innerText = 'This paragraph has been changed';
    // getting object details
    // it prints window object ie parent object because arrow function uses lexical scoping
    console.log(this);
});

document.getElementById('changeTextButton').addEventListener('click', function () {
    // it prints button objec
    console.log(this);
});

/* Compare console.log(this) in above two example*/

// -----------Traversing The DOM---------------------
let highlightFirstCity = document.getElementById('highlightFirstCity');
highlightFirstCity.addEventListener('click', function() {
    let cityList = document.getElementById('cityList');

    // console.log(cityList);

    // setting custom style by adding css class to element
    console.log(cityList.firstElementChild.classList); //prints DOMTokenList

    cityList.firstElementChild.classList.add('highlight');
});

/* DOM is not HTML
HTML ==> Markup Language
DOM ==> processed elements in document tree in memory each element in htmlis referred as node here
*/

document.getElementById('changeOrder').addEventListener('click', function() {
    let coffeeType = document.getElementById('coffeeType');
    coffeeType.textContent = 'Espresso';
    console.log('hi');

    // adding css by style mehod
    document.getElementById('changeOrder').style.backgroundColor = 'green';
});

/* ----- Creating or Inserting NEw Elements ------ */
document.getElementById('addNewItem').addEventListener('click', function() {
    // creating elements
    let newItem = document.createElement('li');
    // taking user input in browser prompt
    newItem.textContent = window.prompt('Enter Item Name');

    document.getElementById('shoppingList').appendChild(newItem); //accepts a node ie html tag
});

/* ------- Removing DOM Element ----------- */

document.getElementById('removeItem').addEventListener('click', function() {
    let shoppingList2 = document.getElementById('shoppingList2');

    // shoppingList2.remove() //removes whole task list

    shoppingList2.lastElementChild.remove(); //remove in 1 click
    shoppingList2.lastChild.remove(); //remove in 2 clicks why?

});
