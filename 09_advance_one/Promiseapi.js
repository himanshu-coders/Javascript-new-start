const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello One 1")
    },1000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Fail PN2")
    },2000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Three 3")
    },3000)
})
//.any Pehli success chahiye, failures ignore karo

// Rule: Jo bhi pehla successful ho jaye, wahi result. Failures ko ignore karta hai — jab tak koi ek success na ho. Sab fail ho jaye tabhi yeh reject hoga.
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error("Error:",err)
})
//.rave definition: Jo sabse pehle settle ho (pass ya fail, dono)

// Rule: Jo bhi promise sabse pehle khatam hoga — chahe woh resolve ho ya reject — wahi result milega. Baaki ignore ho jayenge.
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error("Error:",err)
// })

// .allsettled definition:: Sabka result chahiye, chahe fail ho ya pass

// Rule: Kabhi reject nahi hoga. Har promise ka result milega — chahe wo success ho ya fail.

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error("Error:",err)
// })

// .all definition:: Sab chahiye, ek bhi fail nahi hona chahiye

// Rule: Saare promises resolve honge tabhi result milega. Agar ek bhi reject hua, turant pura Promise.all reject ho jayega — baaki successful results bhi waste ho jayenge.
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error("Error:",err)
// })