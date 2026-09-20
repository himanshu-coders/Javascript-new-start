// const github_api="https://api.github.com/users/akshaymarch7";
// const user=fetch(github_api);
// console.log(user)
// user.then(function(data){
//     console.log(data)
// })

const cart=["shoes","pants","kurta"]
// const promise=createOrder(cart)
// console.log(promise)
// promise
createOrder(cart)
.then(function(orderId){
    // proceedtoPyamet(orderId)
    console.log(orderId)
    return orderId;
})
.then(function(orderId){
return proceedtoPayment(orderId)
})
 .then(function (paymentMsg) {
    console.log(paymentMsg);          // 👈 yeh missing tha
  })
.catch(function(err){
    console.log(err.message)
})

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("cart is not valid")
            reject(err)
        }
   
            const orderId="12345"
            if(orderId){
                setTimeout(function(){
                     resolve(orderId)
                },5000)
              
            }
        
    })
    return pr;
}
function proceedtoPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful for order id ")
    })
}
function validateCart(cart){
return true;
}
