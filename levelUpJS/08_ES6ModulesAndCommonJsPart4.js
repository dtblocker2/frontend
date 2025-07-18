// importing using commonjs
// before using it make sure in node js package.json you have changed type from module to commonjs
const importedModule = require('./08_ES6ModulesAndCommonJsPart3.js');

console.log(importedModule.multiply(3,2));
console.log(importedModule.developer);
console.log(importedModule.add(2,2));
console.log(importedModule.sub(2,2));
