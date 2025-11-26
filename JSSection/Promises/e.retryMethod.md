- create a function that resolves after 5th attempt
- and then create a retry method which keeps calling the previous function (which returns the promise) for n number of times 

```js
let attempt = 0;
function unreliableTask() {
  return new Promise((resolve, reject) => {
    attempt++;
    console.log('attemp ', attempt)
    if (attempt < 6) reject("Failed");
    else resolve("Success");
  });
}

async function retry(promise, count ){
    // return new Promise(async (resolve, reject)=> {
        let data 
        let err
        let init = 0
        while(init < count ){
            init++
            try{
                data = await promise()
                if(data) break
            }catch {
                if(init >= count)
                throw new Error("error here")
            }
        }
        return data
    // })
}

retry2(unreliableTask, 5).then(console.log).catch(console.error);

function retry2(fn, retries){
    return new Promise((resolve, reject)=> {
        function attemptRetries(retries){
            fn()
            .then(resolve)
            .catch((err)=> {
                if(retries <= 0){
                    reject(err)
                }
                attemptRetries(retries-1)
            })
        }
        attemptRetries(retries)
    })
}

const v = [{id: 1, name: 'abhi', age:50}, {id: 1, name: 'abhi', age:20}, {id: 1, name: 'abhi', age:20}]

const re = v.reduce((acc, init)=> {
    return acc += init.age
    
}, 0)

console.log(re)
```
