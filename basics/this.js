const user = {
    name: "pikachu",
    anime: "pokemon",
    channal:"hungama",
    age:5,
    welcomemessage(){
       console.log(`${this.name}, welcome`);
       console.log(this)
      
    }
}
user.welcomemessage()
user.name = "greninja"
user.welcomemessage()

// ------------arrow fucntion------------------------------------------------------

// const addtwo = (num1,num2) => {
//     return num1+num2             //this is called explicit return
// }

// if we use curly braces {} then we have to specify the return keyword.

// const addtwo =(num1,num2) => num1+num2;   //this is explicit return here we can use parentheses also (num1+num2)
// console.log(addtwo(3,4));

// for objects

// const fake = ()=>({user:"name"})

// console.log(fake());
