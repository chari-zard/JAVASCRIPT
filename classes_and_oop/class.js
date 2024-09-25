class user {
    constructor(username,password,email){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encrypt(){
        return `${this.password}`
        }

    capital(){
        return `${this.username.toUpperCase()}`
    }

    //these are called methods they are just like we create a prototype function 
    //function.prototype.encrypt()
}

const new1 = new user("Marcus","fibvso","stoinis@gmail.com")

console.log(new1.encrypt());
console.log(new1.capital());

