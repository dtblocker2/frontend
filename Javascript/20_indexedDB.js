/* it can store upto GB of information rather than 5 MB compared to localstorage
it is server side database like transactional database

it supports version schema
it is asynchronous
while localstorage and session storages are synchronous

we have to deal with a lot of callback as it is asynchronous  as it doesn't support promises

indexed db is stored in browser deafault folder
*/

// first open database
const open = indexedDB.open('myFirstDB', 1); // name is myFirstDB and 1 is version

// below code will run if db needed to be upgraded ie updating version from 1 to 2 or higher or created for first time
open.onupgradeneeded = () => {
    const db = open.result;
    db.createObjectStore('myUserStore', {keyPath: 'id'}); // creating column id which is unique to every element just like in sql
};

open.onsuccess = () => {
    console.log('db opened successfully');
    const db = open.result;
    const transaction = db.transaction('myUserStore', 'readwrite');
    const store = transaction.objectStore('myUserStore');

    /* Storing date */
    // store.put({id: 1, username: 'dtblocker', age: 19}); // no need for json stringify and json parse for this
    // store.put({id: 2, username: 'dhruva', age: 20});
    // store.put({id: 3, username: 'kara', age: 16});
    // store.put({id: 4, username: 'kake', age: 17});

    // printing data
    // const user = store.get(3);

    // print all
    const user = store.getAll();
    // it is asynchronous so onsuccess is needed or it an empty output may be returned
    user.onsuccess = () => {
        console.log(user.result);
    };

    // close the database
    transaction.oncomplete = () => {
        db.close()
    };
};

open.onerror = () => {
    console.log('couldnt open db');
};

// it is not SQL DB but it is kind of like it it has kind of tables in it



