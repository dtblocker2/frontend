/* Asynchronous 
promises
callbacks
*/

// what do we mean by asynchronousity in javascript
/* it means is ability to have pause. 
javascript executes asynchrounously ie not line by line so time delay is not as simple as putting time.sleep(100) as in python as below lines will still get executed
in order to make it synchronous ie execute line by line */

console.log('chaicode');

for(let i = 0; i<5; i++) {
    console.log(i);
};

// above code is example of synchronous function as there is no wait

/* Examples of Asynchronous calls ==> things requiring time
1. network calls
2. read/write files from disc
3. time related function eg wait, timer, alarm etc
4. user input
*/

/* timer fucntion */
function sayHello() {
    console.log('HI');
};

/* executing function after some time */
// use setTimeout()
setTimeout(() => {
    sayHello();
},4000);
//first argument is function in this case it is called callback function or simply callback and second is delay in ms


/* another thing you will see that setTimeout executes after below function because of delay */

console.log('this function is below timeout but it prints before');

/* this is asynchronous nature of js as it is not following sequnce of code unlike in python that executes command after on upper lines are followed 

in order to fix this use */

/* how function/code is executed (see diagram image)
1. code: written by user

2. call stack: it is like register every function which needs to be executed registers here with timeout. as name suggests it is like stack when one element in stack is group of function with same timeout and inside the group there are function arranged as in order of code ie in our example 

first code implemented was with 0 timeout ie for loop then there were hi and hi2 with 4000 timeout hi and and hi2 were executed as sequence in codes

3. event loop: this check if there is any remaining function in callstack that need to be execute

4. environment: browser, node, bun, deno
queue:
 */

setTimeout(() => {
    setTimeout(() => {
        console.log('hi1');
        setTimeout(() => {
            console.log('hi5'); 
        }, 2000)
    }, 2000);
},2000);

setTimeout(() => {
    setTimeout(() => {
        console.log('hi4') 
    }, 2000);
},2000);

setTimeout(() => {
    console.log('hi2');
    setTimeout(() => {
        console.log('hi3')
    }, 2000);
},4000);

/* output is:
hi2
hi1
hi4
hi3
hi5

hi2 is above hi2 is above hi1 even though both have same timeout 4000 and though hi1 is above hi2 because at 0 hi2 is added to call stack but hi1 is added at 2000 so hi1 is added to calllstack later hence it will be called after hi2

basically sequence of execution depend on timeout and when it was added to callstack and at last comes sequence in code

ie if both hi1 and hi2 were added at 0 then hi1 would have been first to execute

Priority sequence:
timeout > addition in callstack > sequence in code
 */

// Now we understood asynchronous behaviour or JS now we learn how to make it Synchronous
