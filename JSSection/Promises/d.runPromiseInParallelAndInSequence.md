```js
const tasks = [
  () => new Promise(res => setTimeout(() => res("Task 1"), 1000)),
  () => new Promise(res => setTimeout(() => res("Task 2"), 500)),
  () => new Promise(res => setTimeout(() => res("Task 3"), 700)),
];

// Implement runInParallel(tasks) and runInSequence(tasks)

```

```js
function runInSequence(tasks) {
    return tasks.reduce((promiseChain, task) => {
      return promiseChain.then(results =>
        task().then(result => [...results, result])
      );
    }, Promise.resolve([]));
  }
 ```

```js
function runInParallel(tasks) {
  return Promise.all(tasks.map(task => task()));
}

```
