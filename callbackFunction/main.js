function multiply(y, z){
//    console.log( y * z);
    return (y * z)
   
}

function sum (a, b, x){
     console.log( a + b);
    result =  x(a, b)
    return result
    
}

let ans = sum(7, 8, multiply)
console.log(ans);

