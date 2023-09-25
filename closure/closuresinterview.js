/**
 * 1. what is closure in javascript?
 * 
 * function is bundle with lexial enviroment is called closure
 *  */ 

function k(b){
    var a = 8;
    console.log(b);

    function z(){
        console.log(a);
    }
// console.log(z);
//    z()
return z;
    
}

// 

// An inner function can be directly called using two parenthesis ()()
//Even parameters can be passed this way (Remember that the function needs to be returned to do this)



function k1(){
  
 function z(){
        console.log(a);
    }
 var a = 8;
return z;
    
}

// k1()()
//sequence not matter it make closure

//change var to let still work same way

// yes inner function have access to outer function arugument  first program

function outest(){
    var c = 10;
    function outer(x){
        let b = 18;
        function inner(){
            console.log(c, x, b);
        }

        return inner;
    }
    return outer;
}
let a = 100;
// outest()("kamya")(); // 10 kamya 18


var count = 0;
function increment(){
    count++
}

// function counter(){
//     var count = 0;
//    function increment(){
//         count++
//     }
  
// }

// console.log(count);


// function counter(){
//     var count = 0;
//  return function increment(){
//         count++
//         console.log(count);
//     }
  
// }

// var count1 = counter()
// count1();  //1
// count1();  //2


// var count2 = counter() // different scope for this
// count2() // 1

//it is not scalable code


function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }

    this.dercementCounter = function(){
        count--;
        console.log(count);
    }

    
}
// function constructor
var counter1 = new Counter()// new keyword 
counter1.incrementCounter();
counter1.incrementCounter();
counter1.dercementCounter();
