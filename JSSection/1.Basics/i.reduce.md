- write code to sum array of values using reduce
```js
const arr = [1,2,3,4]
const sum = arr.reduce((acc, curr)=> {
    acc += curr
    return acc
})
```
