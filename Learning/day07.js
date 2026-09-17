let allEmp = [
    {id:101,name:"Sakib"},
    {id:102,name:"ayan"},
    {id:103,name:"sheikh"},
    {id:104,name:"suhani"},
    {id:105,name:"kotambkar"},
]

// //add
// allEmp.push({id:106,name:"vdk"})

// Read
// allEmp.forEach((emp)=> console.log(emp))

//update
// allEmp = allEmp.map((emp)=> {
//     if(emp.id==104){
//         emp.id=111
//         emp.name="yakub"
//     }
//     return emp;
// });


allEmp = allEmp.map((emp)=> {
    if(emp.id == 104){
       return {
        ...emp,
        name:"yakub"
       }
    }
    return emp;
});
console.log(allEmp);
// //delete
// let id=103
// allEmp = allEmp.filter((emp)=> emp.id != id)
// console.log("del",allEmp);

    
    



//operators

//spread operator (...)

// let allEmp1 = [
//     {id:101,name:"Sakib"},
//     {id:102,name:"ayan"},
//     {id:103,name:"sheikh"},
//     {id:104,name:"suhani"},
//     {id:105,name:"kotambkar"},
// ]

// console.log("Read: ", allEmp1);


// allEmp1 = allEmp1.find((emp)=> {
//     if(emp.id==101){
//         emp.name="manoj"
//     }
// })

// allEmp1.forEach((emp)=>console.log(emp))