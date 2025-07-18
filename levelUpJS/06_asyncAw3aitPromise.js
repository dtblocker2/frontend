/* ASynchronous Await */

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({name: 'dtblocker', url: 'https://www.youtube.com'})

            reject({name: 'dtblocker', url: 'https://www.youtube.com'})
        }, 3000)
    });
};

/* either use
fetchData().then((data) => {})

ot use async
*/
async function getData() {
    try {
        console.log('fetching user data....')
        
        const userData = await fetchData() // to wait for response ie resolve or reject. it works like normal function ir fetchData() but it waits for response then store it in userData and execute further tasks 

        // console.log(`user data: ${userData}`) // dont use object in `` with string it will just print [object Object]
        console.log('User data: ',userData)
    } catch (error) {
        console.log('error fetching data', error)
    }
};

// now call getData() function
getData();
/* handle errors first before resolve */