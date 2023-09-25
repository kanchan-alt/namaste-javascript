// console.log(a);
// console.log(b);
// console.log(c);
let a = 10;
console.log(a);
var b = 3;
console.log(b);
const c = 5;
console.log(c);

/**
 * 1. var attacted to global object and let and const to seperated
 * memory space (script)
 * 
 * 2. at time hositing it gave undefined 
 * 
 * 3.index.js:3 Uncaught ReferenceError: Cannot access 'c' before initialization 
 * 
 * 4.index.js:1 Uncaught ReferenceError: Cannot access 'c' before initialization
 * 
 * 5 let a =10; 
 * 
 * 6. let b; b=10; we can do with let but we can not do with const
 * 
 * 
 * 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.



> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
-> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
-> level of strictness ... var<<let<<const.
-> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
-> syntax error is similar to compile error. while type and reference error falls under run time error.
-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.
 */