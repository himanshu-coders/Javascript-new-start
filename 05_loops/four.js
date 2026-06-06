// const coding=["js","java","c++","ruby","swift"]
// const values=coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values)


const num=[1,2,3,4,5,6,7,8,9,10]
// const newnums=num.filter((n)=>n>4)
// console.log(newnums)
const initialvalue=0
const sum=num.reduce((acc,curr)=>{
    console.log(`acc:${acc},curr:${curr}`)
    return acc+curr
},0)
console.log(sum)
// const newnums=num.map((n)=>{
//     return n+10
// })
// const newnums=num.filter((n)=>{
//     return n>4

// })
// console.log(newnums)


