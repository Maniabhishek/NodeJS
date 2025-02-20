## Methods are:
- Promise.all()
- Promise.race()
- Promise.allSettled()
- Promise.any()


1. Promise.all() → Runs multiple promises in parallel and resolves when all succeed.
```js
Promise.all([
  fetchData(),
  Promise.resolve("Another task"),
]).then(console.log);
```

2. Promise.race() → Resolves/rejects when the first promise completes.

```js
Promise.race([
  fetchData(),
  new Promise(resolve => setTimeout(resolve, 500, "Timeout")),
]).then(console.log);
```
3. Promise.allSettled() → Waits for all promises to settle (resolve/reject).
```js
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
]).then(console.log);
```
4. Promise.any() → Resolves with the first successful promise.

```js
Promise.any([
  Promise.reject("Fail"),
  fetchData(),
]).then(console.log);

```
