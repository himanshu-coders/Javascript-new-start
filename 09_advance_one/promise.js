const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise resolved")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}
).then(function(){
    console.log("Promise resolved 2")
})

const promistThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abc", class:10})
    },1000)
})

promistThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"abc", class:10})
        } else{
            reject("Error: Something went wrong")
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
}).catch(function(error){
    console.log(error)
})  


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if (!error) {
            resolve({ username: "Hello", class: 10 });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers();


