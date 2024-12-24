require("./xyz")
require("./sum")
// console.log(global)

console.log(globalThis === global)

const a = {
    a: 1,
    b:2
}

for(const a in globalThis){
    console.log(a)
}

for(const o in a){
    console.log(o)
}

calculateSum(1,2)