// const calculateSum = require("./sum")
const obj = require("./sum")
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

// calculateSum(1,2) 
// now that we have exported multiple variables then we cannot use the function like above 
// on line 2 variable will be an object in order to call the function or variable we need to use obj as shown below
// these kind of exports is known as commonjs exorts
// we can destructure in line 3 without using obj { calculateSum } and can use without obj
obj.calculateSum(2,3)
