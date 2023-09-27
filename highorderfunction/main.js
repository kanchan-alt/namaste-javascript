// sum of element of array

let arr = [11, 24, 8, 1, 18];

function findSum(ar){
  
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
     
        sum = sum + arr[i];
        // console.log(sum);

      
        
    }

    return sum;



}
// console.log(findSum(arr));


// using reduce method

let x = arr.reduce((acc, curr)=> {
      return acc + curr
}, 0)

// console.log(x);

// console.log(arr.reduce((acc, curr)=> {
//     return acc + curr
// }, 0));



//find max in this array


function findMax(ar){
  
    let max = 0;

    for (let i = 0; i < ar.length; i++) {
        // console.log(ar[i]);
     
        if(ar[i] > max){
          
            max = ar[i];
        }
        
    }

    return max;

}

// console.log(findMax(arr));

const y =  arr.reduce((max, curr)=> {
     if(curr > max){
        max = curr;
     }
     return max;

}, 0)

// console.log(y);

