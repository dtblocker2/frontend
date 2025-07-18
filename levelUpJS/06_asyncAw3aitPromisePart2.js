function getContent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Got content video data')
        }, 2000);
    })
};

function getComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Got comment data')
        }, 5000);
    })
};

async function getBlogData() {
    console.log('getting data...');
    const content = await getContent();
    console.log(content);
    const commemt = await getComments();
    console.log(commemt);

    console.log('finished fetching data');
}

/* or you can use promise.all as input array of callback functions */

async function getBlogData2() {
    console.log('getting data...');
    
    const outputArr =  await Promise.all([getComments(), getContent()]);

    const [comment, content] = outputArr;

    /* or use below directly
    const [comment, content] =  await Promise.all([getComments(), getContent()]);

    */
    console.log(comment);
    console.log(content);
    console.log('finished fetching data');
}

getBlogData(); // in this comment and content are fetch differentlly with timeout of 5sec and 2sec respectively
getBlogData2(); //in this case both of them are fetch together parallely making time 5 sec ie highest time taken by all function
