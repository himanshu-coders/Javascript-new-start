const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

// marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])
// const allheros=marvel_heros.concat(dc)
// // console.log(marvel_heros)
// console.log(allheros)

// const all_new_heros=[...marvel_heros,...dc]
// console.log(all_new_heros)

const mynumarray=[1,2,3,4,5,[4,5,4],3,4,5,[3,4,5]]
const mynewarray=mynumarray.flat()
console.log(mynewarray)
let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3))