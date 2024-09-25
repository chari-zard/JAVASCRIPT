// function createuser(username,score){
//     this.username = username,
//     this.score = score
// }

// createuser.prototype.increment = function(){
//     this.score++
// }

// createuser.prototype.printme = function(){
//     console.log(`the updated scrore is ${this.score}`)
// }

// const one = new createuser("sam",68)
// const two = new createuser("max",98)

// two.printme()


// const myarr = ['baki','gojo']

// const myobj = {
//     username:'any'
// }

// Object.prototype.devansh = function(){
//     console.log("this is devansh property");
    
// }
// // Functions are a special kind of object called a "callable object". They can be invoked or called, while other types of objects cannot.
// // SO PROTOTYPE DEFINED ON OBJECT WILL ALWAYS IS ACCESSIBLE BY THE FUNCTIONS,STRINGS,ARRAYS OR  OBJECTS
// // BUT IF THE PROTO IS DEFINED ON THE ARRAYS OR FUNCTIONS OR STRINGS THEY ARE NEITHER ACCESSIBLE BY EACH OTHER NOR BY THE OBJECT

// myarr.devansh()
// myobj.devansh()

// Array.prototype.garg = function(){
//     console.log('this is array prototype');
    
// }

// myarr.garg()
// myobj.garg()  // this will throw an error  because myobj doesn't have the garg() property, it can only be accesed by ARRAY.



String.prototype.truelength = function (){
    console.log(`the true length of string is ${this.trim().length}`);    
}

"devansh    ".truelength()
"  devgarg   ".truelength()

//here the truelenght() is not indefined prototype(property) of an string but make a new one like this and now any string will be able to access this.

