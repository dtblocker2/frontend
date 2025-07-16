/* in this section we will learn ability to manipuklate website and automation for example login automation
though many commercial website dont allow it
getting data/web scraping etc. */

// attaching js file to html
console.log('Hello World!');

// BOM window object description
console.log(window);
/* it has parameter like blur, localstorage, height etc */

// getting window height
console.log(`${window.outerHeight} x ${window.outerWidth}`)

// navigoator class
console.log(navigator);
console.log(navigator.userAgent);

/* you can check if cookies are enabled or not, geolocation, device meomory and also gpu stats, language, pdfz viewer enables or not etc usign navigator */

// Location
console.log(location);
console.log(location.hostname);
console.log(location.href);
console.log(location.pathname);
console.log(location.port);

// DOM Elements
/* every element in dcoument are arranged like trees model where parent as branch and child as subbranches */

console.log(document); // shows whole html code in console along with code that browser injects eg live server scripts etc
// you can hunt elements by
console.log(document.firstChild);
console.log(document.getElementsByTagName('h1')); //eturn array object of elements with h1 tag see here instead of element we use elements

// or you can use class or ID selectors
console.log(document.getElementById('idName')); //null because no element by name of idName
