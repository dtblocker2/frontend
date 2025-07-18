/* it not widely used in web dev but used in application, framework, libraries like angular, react etc. */

// put star after function to make a function a generator
function* numbrGenerator() {
    /* what does it do
    it doesn't execute all things at once but it create things on resume basis

    if it again and again it will result again and again
    */

    // you use yield instead of return
    yield 1 // for first time it will return 1
    yield 2 // if called second time it will return 2
    yield 3 //  similarly on third time it will return 3

    /* what about 4th time bro FAFO (fuck around and find out) */
};

/* first create generator object using generator function */
const gen = numbrGenerator();
console.log(gen);

try {
    const executingGen = gen();
    console.log(executingGen);
}catch(e) {
    console.log('gen is not a fucntion');
};

/* use gen like an object which has next function in it. this next() function is iterator of generator */

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/* what if we called it 4th time */
console.log(gen.next().value); //undefined
