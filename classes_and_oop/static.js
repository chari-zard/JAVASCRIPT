class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    } 

    static createId(){ 

        //This method will only be accessible within the class or by the class
        //Static methods/properties cannot be accessed through instances of the class, only through the class itself.

        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(User.createId())
console.log(hitesh.logMe())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());