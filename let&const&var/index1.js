
const a = 10;
console.log(`this is const value ${a}`);

// redecleration no allow

// const a = '7';  //Uncaught SyntaxError: Identifier 'a' has already been declared
  
// reassaginment
//   const a = 8:
// console.log(a);  //Uncaught TypeError: Assignment to constant variable

// const a;
// a=10;

//Uncaught SyntaxError: Missing initializer in const declaration


// let b = 24;
// let b =25;
//Uncaught SyntaxError: Identifier 'b' has already been declared

// let b = 24;
//  b = 7;
//  console.log("we can reassigned in let" + b); 

let b ;
b = 0;
console.log("we can declared b and assigned any time " + b);


