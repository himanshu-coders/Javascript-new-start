//Primitive
//7 types: String, Number, boolean, null, undefined, symbol,BigInt, 
//Reference(Non primitive)
//Object , Array, fucntion,  

//Javascript is dynamically typed language, we can change the type of variable at runtime.
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId) //false, because symbol is unique
// const bigNumber=12093846389200239

const heros=["shashank","Nobita","Shizuka"]
let myObj={
    name:"Himanshu",
    age: 24,
    isStudent: true
}

const myFunction=function(){
    console.log("Hello World")
}
console.log(myFunction) //symbol
// console.log(typeof heros) //object
// console.log(typeof myObj) //object
// console.log(typeof myFunction) //function


//+++++(++++++++++++++++++++++++++++++++++++++++++++
//Stack(primitive), Heap(non primitive ) type of memery

let myYoutubeName='Himanshu-coders'
let anothername=myYoutubeName
anothername='Siddharth-coders-2'
console.log(myYoutubeName) //Himanshu-coders
console.log(anothername) //Himanshu-coders
//Siddharth-coders-2
