// we can only store string in local storage though we can use parsing for other data types like parseInt for integers but what about complex data types such as array

// if we store number then it gets converted to string
localStorage.setItem('num', 122);
localStorage.getItem('num'); // output '122' string

// similarly for below input we get '1,2,3,4' string for array not easy to convert into array
localStorage.setItem('nums', [1,2,3,4]);
localStorage.getItem('nums');

// convert to JSON string and deJSON it
const nums2 = [1,2,3,4];
localStorage.setItem('nums2', JSON.stringify(nums2));

const nums2String = localStorage.getItem('nums2'); // '[1,2,3,4]'

const nums2Fetched = JSON.parse(nums2String)
console.log(nums2Fetched); // [1,2,3,4]
