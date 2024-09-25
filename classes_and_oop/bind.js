const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetPerson = person.greet.bind(person); // Bind the 'greet' method to 'person'
greetPerson(); // Output: Hello, my name is John

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


let bindvar = borrow.bind(name1,"mumbai",2000)

console.log(bindvar);
// bindvar()

//bind creates a copy of the function which can be invoked later rather than directly invoking like call.



