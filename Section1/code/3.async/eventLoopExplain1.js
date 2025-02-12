const fs = require("fs")
const a = 10

setImmediate(()=> {
    console.log("immediate")
})

fs.readFile("./file1.txt", "utf8", (err, data)=> {
    console.log('file reading: ', data.toString())
})

Promise.resolve("Promise").then((d)=> console.log(d))

setTimeout(()=> {
    console.log('timeout')
}, 0)

process.nextTick(()=> {console.log('nextTick')})

console.log(a)
console.log("end of code")
