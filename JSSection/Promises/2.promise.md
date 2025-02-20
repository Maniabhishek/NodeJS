> A Promise is an object representing the eventual completion (resolved) or failure (rejected) of an asynchronous operation.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise.then(console.log).catch(console.error);

```

### States of a Promise:
- Pending → Initial state, operation not completed.
- Fulfilled (Resolved) → Operation successful.
- Rejected → Operation failed.

### Why Use Promises Over Callbacks?
- ✅ Avoids callback hell
- ✅ Improves readability
- ✅ Easier error handling with .catch()
- ✅ Supports chaining and async/await

### Creating and handling Promises
```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
};

fetchData()
  .then(data => console.log(data))  // "Data fetched"
  .catch(error => console.error(error));
```
### chaining process
```js
fetchData()
  .then(data => {
    console.log(data);
    return "Processing...";
  })
  .then(processed => console.log(processed))
  .catch(error => console.error(error));

```
