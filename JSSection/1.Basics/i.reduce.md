- write code to sum array of values using reduce
```js
const arr = [1,2,3,4]
const sum = arr.reduce((acc, curr)=> {
    acc += curr
    return acc
})
```
- flatten array
```js
const arr = [[1,2], [1,2], [5,6], [7,8]]
const flattenedArray = arr.reduce((acc, currentValue)=> {
    // acc = [...acc, ...currentValue]
    // // or 
    // console.log(acc)
    acc = acc.concat(currentValue)
    console.log(acc)
    return acc
}, [])

console.log(flattenedArray)
```

-  Group items by property
```js
const users = [
        { name: "Alice", role: "admin" },
        { name: "Bob", role: "user" },
        { name: "Eve", role: "admin" }
    ];


const roles = users.reduce((acc, curr)=> {
    if(!acc[curr.role]) acc[curr.role] = []
    acc[curr.role].push(curr)
    return acc
},{})
console.log(roles)
// output
/*
{
  admin: [{ name: "Alice", ... }, { name: "Eve", ... }],
  user: [{ name: "Bob", ... }]
}
*/
```

- Count Occurrences of Items
```js
const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];

const counts = fruits.reduce((acc, curr)=> {
    if(!acc[curr]) acc[curr] = 0
    acc[curr]++
    return acc
}, {})

console.log(counts)

//or 

const counts2 = fruits.reduce((acc, curr)=> {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {})

console.log(counts2)
```

- Convert Array to Object (using id as key)
```js
const products = [
    { id: 1, name: "Pen" },
    { id: 2, name: "Pencil" },
  ];


const productObj = products.reduce((acc, curr)=> {
    acc[curr.id] = curr
    return acc
}, {})

console.log(productObj)

  /*
{
  1: { id: 1, name: "Pen" },
  2: { id: 2, name: "Pencil" }
}
*/
```

- Chaining Calculations
```js
const cart = [
  { name: "Shoe", price: 100 },
  { name: "Hat", price: 40 }
];

const total = cart
  .reduce((acc, item) => acc + item.price * 1.1, 0) // apply 10% tax
  * 0.9; // apply 10% discount

console.log(total); // 140.4

```
