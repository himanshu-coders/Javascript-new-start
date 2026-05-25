let score=true
// console.log( typeof score)
// console.log(typeof (score))

//javascript main strict check nahi hai isiliye log typescript use krte hai
// "33" -> 33
//"33abc"->Nan
//true->1
//false->0  

let valueInNumber=Number(score)//important line for type conversion
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn=undefined
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1->true 0->false
//""-> false " "->true
//"hello"->true


let str1="hello"
let str2=" duniya"
let str3=str1+str2
console.log(str3)

console.log(1+"2")
console.log("2"+1)
// let x=1
// const y=x++
// console.log(x)
// console.log(y)

let x=1
const y=++x
console.log(x)
console.log(y)