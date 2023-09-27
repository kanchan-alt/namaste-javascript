const users = 
    [
        {firstName:" ji", lastName: "ok", age: 23},
        {firstName:" virat", lastName: "kholi", age: 34},
        {firstName:"sharma", lastName: "ji", age: 61},
        {firstName:"deepika", lastName: "pad", age: 23},
    ];

    //1. get full a name
    //user.firstName +" "+ user.lastName
    const fullName = users.map((user)=> `${user.firstName} ${user.lastName}`)
    // console.log(fullName);


    // 2. how many unique people with unique { 29:2, 71:1, 100:0,}


    const uniqueX = users.reduce(function(acc, cur){
        if(acc[cur.age]){
           acc[cur.age] = ++acc[cur.age]
          }
          else{
            acc[cur.age] = 1;
          }
          return acc;

    },{})

    console.log(uniqueX);

    const uniqueY = users.reduce((acc, cur)=>  {
        if(acc[cur.age]){
            acc[cur.age] = ++acc[cur.age]
           }
           else{
             acc[cur.age] = 1;
           }

           return acc;
    },{})

    console.log(uniqueY);

    //first name of all people whose age is less than 30


    const firstNames = users.filter((user)=> user.age < 30).map(user => user.firstName)
    //function chain

    console.log(firstNames);



  const firstNames1 = users.reduce((acc, curr)=> {
        if(curr.age < 30){
            acc.push(curr.firstName)
        }
        return acc;

  },[])

  console.log(firstNames1);





