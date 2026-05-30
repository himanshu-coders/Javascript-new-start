function saymyname(){
    console.log("My name is John");
}

saymyname()

// function sumtwonumber(num1,num2){
//     console.log(num1+num2)
// }
// function sumtwonumber(num1,num2){
//     let result=num1+num2
//     return result
// }
// const result=sumtwonumber(4,5)
// console.log("result:",result)

// function loginusername(username="kutta"){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `your username is ${username} thank you`
// }


// console.log(loginusername("himanshu"))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,400,500))

// const user={
//     username:"himanshu",
//     price:199

// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject({
//     username:"himanshu",
//     price:199
// })
const myNewArray=[1,2,3,4,5]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray))