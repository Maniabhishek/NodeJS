- Callback Hell occurs when multiple nested callbacks make the code hard to read and maintain. This happens when asynchronous functions depend on each other, leading to deeply nested structures.

```js
function getUsers(userId, callback){
    setTimeout(()=> {
        console.log(userId)
        callback({id: userId, name: "test", email: "abc.mail.com"})
    }, 1000)
}

function getOrders(userId, callback){
    setTimeout(() => {
        console.log('fetching orders')
        callback({id: 1, item: "laptop"})
    }, 1000)
}

function getPaymentDetails(orderId, callback){
    setTimeout(()=> {
        console.log('getting payment details')
        callback({orderId: 1, status: "paid"})
    },1000)
}

function sendEmail(emailId, callback){
    setTimeout(()=> {
        console.log('sending email to ', emailId)
        callback('email sent succefully')
    }, 1000)
}

getUsers(1, (user)=> {
    console.log(`user: ${user.email}`)
    getOrders(user.id, (item)=> {
        console.log(item.id, " ", item.item)
        getPaymentDetails(item.id, (details)=> {
            console.log(`payment details: ${details.orderId} ${details.status}` )
            sendEmail(user.email, (response)=> {
                console.log(response)
            })
        })
    })
})
```
