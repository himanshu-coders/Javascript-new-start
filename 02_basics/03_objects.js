//singleton->constructor se agar bnega to singleton bnega hmeasha
//literals se nahi bnta singleton
//object literals
const mysym=Symbol("key 1")
const jsuser={
    name:"Himanshu",
    age:18,
    [mysym]:"my key 234",
    location:"Jaipur",
    email:"hitesh@google.com",
    isloggedin:true,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
}

// console.log(jsuser.name);
// console.log(jsuser["age"])
// console.log(jsuser[mysym])

// jsuser.age=20
// Object.freeze(jsuser)
// jsuser.age=22
// console.log(jsuser)
jsuser.greeting=function(){
    console.log("Hello jsuser")
}
jsuser.greetingTwo=function(){
    console.log(`Hello jsuser, ${this.name}`)
}
console.log(jsuser.greetingTwo())

