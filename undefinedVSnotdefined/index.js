/**
 * different between undefined vs not defined?
 * 
 *  1.Understand the difference between undefined and not defined in JS. Many developers assume that undefined is exactly the same as not defined, but that's not true. undefined is a value in JavaScript and in fact, it also takes up memory space.
 * 
 * 2. till value is assigned to varible/object it assined undefined as placeholder in memory
 * 
 * 3. not defined mean not declare in memory
 * 
 * 4. not defined !== undefined
 * 
 * 5. lossely typed/ weakly type language mean varible is not attach to any datatype
 */

console.log(x); //undefined
var x = 24;
console.log(x); // 24
x = "ji"
console.log(x); //ji
x = true
console.log(x); //true
