const user = {
    username: "kanchan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// we running on node enivroment so {} empty object as result
// console.log(this);

function thisInFunction (){
    let username = "virat"
    console.log(this);
    // global and may thing give
    console.log(this.username);
    //it undefined
}

thisInFunction()


const thisInFunctionVarible = function(){
    let username = "virat"
    console.log(this);
    //global and other property
    console.log(this.username);
    // result undefined


}

// thisInFunctionVarible() 

const thisInArrow = () => {
    let username = "virat"
    console.log(this);
    console.log(this.username);

}

// thisInArrow()
//  this.username = undefined  this={}


// const  addTwo = (num1, num2) => {
//     return num1 + num2 
//explicited way
// }


// const  addTwo = (num1, num2) =>  num1 + num2 
//implicited way

// const  addTwo = (num1, num2) =>  (num1 + num2) 

const  addTwo = (num1, num2) =>  ({username: "virat"})

console.log(addTwo(3, 4));






/**
 * current context  mean value
 * console.log(this)
 * in browser  global object is window object
 */