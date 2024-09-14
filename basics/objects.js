const mysym = Symbol(); //creating a symbol(a data structure with unique id)
const newuser = {
    name: "Charizard",
    age: 3,
    height:12,
    ispowerful:true,
    [mysym]:"key"
}
// console.log(newuser.age);
// console.log(newuser["age"]);//both methods are used to access the objects but the symbols can only be accessed by [].
// console.log(typeof newuser[mysym]);

// console.log(newuser);

//freeze() method is used to make a variable non-manipulative
//but if we change a varible after freezing it, it'll not through any error but no change will be made to the org variable.
// object.freeze(newuser)

newuser.greet = function(){
    console.log("this is demo funnction");
    
}
// console.log(newuser.greet());

newuser.greet();
