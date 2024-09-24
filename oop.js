// const employee = {
//     username: 'sam',
//     userid:231,
//     loggedin: 5,

//     getUserDetails: function(){
//         console.log('this block executed');
        
//     }
// }

// console.log(employee.userid)
// console.log(employee.getUserDetails())


function user(username,id,isloggedin) {
    this.username=username;
    this.id=id;
    this.isloggedin=isloggedin

    return this
}


const oneuser = new user('max',231,true)
// const twouser = user('sam',531,false) //  this will overwrite the value of the function either it is printed or not.
const twouser = new user('sam',531,false) //that's why we use new keyword 



//new keyword functioning
//1: creates an empty object called as instance
//2:  construction function is called.
//3:   The constructor function is called with the this keyword bound to the new object. This allows the constructor function to assign properties to the new object.
//4:  the value is returned



console.log(oneuser);
// console.log(twouser);
