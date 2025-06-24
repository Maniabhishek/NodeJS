- It converts a function with multiple parameters into a sequence of functions.
- Each function takes a single argument and returns another function until all arguments are received.
- Helps in functional programming by enabling function reusability and composition.

```js
// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add(5);  // First function call with 5
console.log(addTwo(4));
```
