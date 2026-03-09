```js
// result {a: {b: {c: {d : e}}}}

const str = 'a.b.c.d.e'

const strArr = str.split('.')

const res = strArr.reduceRight((prev, curr) => {
    return {[curr]: prev}
})

console.log(JSON.stringify(res))
```
