// // function setname(name) {
// //     this.name = name
// // }

// // function createuser(name,age,salary) {

// //     setname(name)  //this will only refer to the funtion setname but will not execute 
// //                      //because its context will be deleted when it refer to the other function

// //     this.age = age
// //     this.salary = salary
// // }

// // const created = new createuser("nichollas",21,20000)
// // console.log(created);



// function setname(name) {
//     this.name = name
// }

// function createuser(name,age,salary) {

//     setname.call(this, name)//the call function calls the function implicitly 
//                         //anit holds the reference of the setname function.
//                         //and 'this' is passed as argument
//                         //now it will execute properly
//     this.age = age
//     this.salary = salary
// }

// const created = new createuser("nichollas",21,20000)
// console.log(created);



// call function is also used for function borrowing

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

borrow.call(name1,"mumbai",2000)
borrow.call(name2,"gujrat",2015)