```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("setTimeout inside Promise"), 0);
});
Promise.resolve().then(() => console.log("Promise 3"));

console.log("End");


// start 
// end 
// promise 1
// promise 2
// promise 3
// setTimeout 
// setTimeout inside Promise
```


```js
const p = new Promise((resolve, reject) => {
    console.log(1);
    resolve(100);
  });
  
  p.then(() => {
    console.log(2);
    return p;
  })
    .then((d) => console.log(3,d))
    .then(() => console.log(4));

// output
// 1
// 2
// 3 100
// 4
```

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
    resolve(100);
  });
  
  p.then(() => {
    console.log(2);
    return new Promise((resolve)=> resolve(5) );
  })
    .then((d) => console.log(3,d))
    .then(() => console.log(4));
```


```js
async function test() {
    console.log("A");
  
    await new Promise(resolve => setTimeout(resolve, 0));
  
    console.log("B");
  }
  
  console.log("C");
  test();
  console.log("D");
```
