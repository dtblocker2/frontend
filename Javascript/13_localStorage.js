/* store site data locally on disk */
// got to browser ==> inspect ==> application tab go to local storage drop down menu along with it you may find cookies, session storage, Indexed DB etc.

// useful to store small amount of data not more than 5MB

// we store info in key vslue pair
localStorage.setItem('color', 'blue');

/* in our case if i run it on local host 55000 then it will be saved in it ie whichever website i will run on 5500 port above data is stored */

// fetching item
localStorage.getItem('color');

// renaming item
localStorage.setItem('color', 'blue');

// removing item
localStorage.removeItem('color');

localStorage.setItem('color', 'blue');
localStorage.setItem('user', 'dtblocker');
// clearing local storage
localStorage.clear()
