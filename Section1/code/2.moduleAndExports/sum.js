console.log("sum executed")

function calculateSum(a,b){
    console.log(a+b)
}

const x = "this is variable x"

// module.exports = calculateSum // way to export 
// let's say we want to export another variable from here then we can do so using code below
module.exports = {
    calculateSum,
    x
}