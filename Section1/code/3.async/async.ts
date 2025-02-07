const fs = require("fs")
const https = require("https")

// sync code
console.log("this is synchronous code")

// async code
https.get("https://dummyjson.com/products/1", (res)=> {
    let data 
    res.on('data', (d) => {
        data += d
    });
    res.on("end", ()=> {
        console.log(data)
    })
})

//

setTimeout(()=> {
    console.log('code inside timeout')
}, 5000)


fs.readFile("./file1.txt", (err, data)=> {
    console.log(data.toString())
})

console.log("nodejs has reached the end of the file")
