// new Promise(function(resolve,reject){
//     setInterval(()=>{
//         console.log("hello")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('executed')
// }).catch(function(error){
//     console.log('error')
// })


new Promise(function(resolve,reject){
    let error = false
    if (!error) {
        setTimeout(function(){
            console.log('hello')
        },1000)
    } else {
        reject('something went wrong')
    }
    resolve({username:"dev",age:21})

}).then(function(user){
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username)
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('executed finally');   
})




fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
    
})


