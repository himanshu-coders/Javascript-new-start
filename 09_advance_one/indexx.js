/**
 * What is async?
 * what is await?
 * how async await work behind the scenes?
 * examples of using async await
 * error handling
 * interviews
 * async await vs promise.then/.catch
 */

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello")
    },10000)

})

//older way of handling promises
// function getData(){
//     p.then((res)=> console.log(res));
//     console.log("Fetching data...")
// }
// getData();
// await is a keyword that can only be used inside an async function. It makes JavaScript wait until the promise settles and returns its result.
//async await way
async function handlePromise(){
    const val= await p
    console.log("Fetching data...")
    console.log(val)

    const val2= await p
    console.log("Fetching data...2222")
    console.log(val2)
}
handlePromise()
// async function getdata(){
//     return p
// }
// const datapromise=getdata()
// // console.log(datapromise)
// datapromise.then((res)=>console.log(res)) 

//async and await are used to handle promises
// await can be only be used inside a async function