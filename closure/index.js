// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }

//     return y
// }

// var z = x();
// console.log(z);
// z();


function x(){
    var a = 7;
    function y(){
        var b = 8;
        function z(){
            console.log(a, b);
        }
        z();
    }
    y();
}

x()

/**
 * 

1.Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure


2. The fun in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript!!

3. function x(){
      var a = 7;
     function y(){
        console.log(a);
    }
       a = 100;
     return y
 }


  var z = x();
  console.log(z);
   z(); // 100
 */