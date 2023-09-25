function x(){
    var i = 1;
    setTimeout(function(){
         console.log(i);
    }, 3000)

    console.log("synchronous that why no wait");
}

// x()


function x1(){
  
    for (var i = 0; i <=5; i++) {
        console.log(i);
        setTimeout(function(){
            console.log(i);
       }, i*1000)
    
        
    }
  
    console.log("synchronous that why no wait");
}

x1()


function x2(){
  
    for (let i = 0; i <=5; i++) {
        setTimeout(function(){
            console.log(i);
       }, i*1000)
    
        
    }
  
    console.log("synchronous that why no wait");
}

// x2()


function x3(){
  
   for (var i = 0; i <=5; i++) {
    console.log(`this is ${i}`);
    function close(i){
        setTimeout(function(){
            console.log(i);
       }, i*1000)

    }

    close(i)
    
   }
  
    console.log("synchronous that why no wait");
}

// x3()