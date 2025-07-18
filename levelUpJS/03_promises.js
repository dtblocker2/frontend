/* Promises takes callback and resolve and reject arhuments */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                /* execute resolve if task is done i if task couldn't be done return reject */
                resolve('Operation done sucessfully');
            }else {
                reject('error occcured during operation')
            }
        }, 3000);
    });
};

// comsuming promise
let response = fetchData();
console.log(response); // prints promise { <pending> }
// because we did not wait for response

/* 
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.

fulfilled: meaning that the operation was completed successfully. aka resolved

rejected: meaning that the operation failed. */

/* get to know if it is fulfilled or rejected */

/* fetchData().then(); // for resolve part
fetchData().catch(); // for rejected request */

/* or you can use them together to form callback hell */
fetchData()
    .then((data) =>{ 
        console.log('✅ success:', data);
        return 'dtblocker'
    }) // Runs if resolved
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.error('❌ error:', error)); // Runs if rejected
    // note error is handled by console.error and not by console.log