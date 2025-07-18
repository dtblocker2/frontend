// default import using modules don't forget .js extension
import multiply from './08_ES6ModulesAndCommonJs.js'

console.log(multiply(3,2));

// named import
import {add, sub, developer} from './08_ES6ModulesAndCommonJs.js'

console.log(developer);
console.log(add(2,2));
console.log(sub(2,2));
