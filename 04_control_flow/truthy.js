const userEmail="h@himanshu.ai"
if(userEmail){
    console.log("u have an email")
}
else{
    console.log(" u dont have the email ")
}

// In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Truthy values include:
//True, {}, [], 42, "0", "false", new Date(), -42, 3.14, -3.14, Infinity, -Infinity
//Falsy value
// false,0,-0,BigInt 0n, "", null, undefined, NaN


// if(userEmail.length===0){
// console.log("array is empty")
// }
// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("object is empty")
// }

//Nullish Coalescing Operator (??): null undefined
let val1;
val1=5??10
console.log(val1) //5

let val2=null??10
console.log(val2) //10

let val3=undefined??10
console.log(val3) //10


//Terniary operator
const age=18
const canVote=age>=18?"can vote":"cant vote"
console.log(canVote) //can vote