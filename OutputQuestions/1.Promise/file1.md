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
