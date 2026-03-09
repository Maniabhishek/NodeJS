```js
// result {a: {b: {c: {d : e}}}}

const str = 'a.b.c.d.e'

const strArr = str.split('.')

const res = strArr.reduceRight((prev, curr) => {
    return {[curr]: prev}
})

console.log(JSON.stringify(res))
```


```ts
type NestedObject = {
  [key: string]: string | NestedObject;
};

const str: string = 'a.b.c.d.e';

const strArr: string[] = str.split('.');

const res: NestedObject = strArr.reduceRight<NestedObject | string>(
  (prev, curr) => {
    return { [curr]: prev };
  }
);

console.log(JSON.stringify(res));
```
