console.log("Hello");

let arr = [5,4,3,2,1]

for(index in arr){
    console.log(index);
}

for(val of arr){
    console.log(val);
}





//array methods


//foreach- cannot return anything
arr.forEach((n)=> {console.log(n);})

//map- can return
let newArray = arr.map((n)=> n*2)
console.log(newArray);

//filter- return whole array
let modarr = arr.filter((n)=> n != 3)
console.log(modarr);

//example

let allemployee = [
    {id:101, name:"Sakib",sal:800000},
    {id:102, name:"tina",sal:800000},
    {id:103, name:"vdk",sal:800000}
]

allemployee = allemployee.filter((emp)=> emp.id != 102)
console.log(allemployee);

let id=103

let empfound = allemployee.find((emp)=> emp.id == id)
console.log("find",empfound);
