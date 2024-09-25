class user {
    constructor(username){
        this.username = username
    }

    method1(){
        return "method1 called"
    }

}

class teacher extends user{
    constructor(username,course,email){
        super(username)
        this.course = course
        this.email = email
    }

    method2(){
        return "method 2 called"
    }

    capitalize(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new teacher("rohit","batting","sharmarohit@bcci.com")
const user2 = new user("virat")

// console.log(user1.method1());
// console.log(user1.capitalize());
// console.log(user1.course);


// console.log(user1.method2());

console.log(user1 instanceof teacher);//true
console.log(user1 instanceof user);//true because teacher class has inherithed the class user
console.log(user2 instanceof teacher);//false user class can't inherit the properties of teacher class
