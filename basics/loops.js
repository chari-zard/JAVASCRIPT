const arr = [23,4,1,67,5,4]

for (const i of arr) {
    // console.log(i)    // it will return the value of the array 
}


for (const i in arr) {
    
    // console.log(i);  //it will return the key of the value (index for array)
    
}

const user = {
    name:"dev",
    age:24,
    class:"hihf",
    city:"delhi"

}


for (const i in user) {
    // console.log(user[i]);
    
}


const map = new Map()

map.set("1","one")
map.set("2","two")
map.set("3","three")

// console.log(map);

for (const i in map) {
    // console.log(i);
    
}

arr.forEach( (i,index,arr)=>{
    // console.log(`the index of ${i} is ${index}and array is ${arr}`);

})

const ar = [
    {
        name:"one",
        age:1
    },
    {
        name:"two",
        age:2
    },
    {
        name:"three",
        age:3
    }
]

ar.forEach((i)=>{
    console.log(`age of ${i.name} is ${i.age}`);

})
console.log("it's a good work man");
