const name1 = {
    firstname : "rohit",
    lastname : "sharma"
}

const borrow = function(hometown,debut){
    console.log("fullname : "+this.firstname+" "+this.lastname+" "+hometown + " " + debut);
    
}
const name2 ={
    firstname:"surya",
    lastname:"yadav"
}

borrow.apply(name1,["mumbai",2000])
borrow.apply(name2,["gujrat",2015])


// call(): Arguments are passed individually.(not ideal for variable-length arguments)
// apply(): Arguments are passed as an array.(ideal for arrays)

const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers));  // Output: 5
