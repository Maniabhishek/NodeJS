```js
const https = require("https")
const fs = require("fs")
const crypto = require("crypto")

console.log('hello world')

// bocking code this will block the main the thread 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("pkkdf2 is executed")

setTimeout(()=> {
    console.log('execute setimeout in 0 sec')
},0) // this code will only be executed when call stack of main thread is empty

https.get("https://dummyjson.com/products/1", (res)=> {
    let data 
    res.on("data", (chunk)=> {
        data += chunk
    })

    res.on("end", ()=>{
        console.log(data)
    })  
})

console.log("end of call stack of main thread")


```
