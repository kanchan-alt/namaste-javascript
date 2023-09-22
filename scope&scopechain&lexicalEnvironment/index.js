function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();

/**
 * 1. scope ==== accesiablity of varible
 * 
 * 2. lexical enviroment ==== local memory + lexical env of parent
 * 
 * 3. scope chain ===  its is process when we check accesabity of varible from its scope to lexical env of parent and further there parent it form a chain
 */