// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }

// Only iterable values, like Array and String,objects are not iterable,hat lack a Symbol.iterator method:


const numbers = [1, 2, 3];

console.log(...numbers);

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }