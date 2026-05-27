const name="himanshu"
const repoCount=50
//another type to declare string
const gamename=new String("Hello duniya")
// console.log(name+"Avasthi"+repoCount) //8 
// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`) //Hello my name is himanshu and my repo Count is 50

console.log(gamename.length)
// console.log(gamename.toUpperCase()) 
// console.log(gamename.charAt(3))
// console.log(gamename.indexOf("a"))
// const newString=gamename.substring(0,4)
// console.log(newString)
const anotherString=gamename.slice(-8,4)
console.log(anotherString)

const newStringOne="      himanshu      "
console.log(newStringOne.trimEnd())
const url="https://himanshu.com/hitesh%20sharma"
console.log(url.replace('%20','-'))

