const myArr=[0,1,2,3,4]
// console.log(myArr[0])
const newArr=myArr.join()
// console.log(typeof newArr)
// console.log(typeof myArr)
// myArr.push(5)
// myArr.unshift(0)
// // myArr.shift()
// console.log(myArr.includes(0))
// console.log(myArr.indexOf(3))


//slice and splice: slice does not change the original array,splice change the original array

console.log("A : ",myArr)
const myn1=myArr.slice(1,4)
console.log(myn1)

console.log("B : ",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)

console.log("C : ",myArr)