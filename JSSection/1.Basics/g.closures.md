- a function with it lexical scope bundled together is known as closure
- A closure is the combination of a function bundled together with references to its surrounding state(lexical environment)

```js
function a(){
  var c = 100
  function b(){
    console.log(c)
  }
  b()
}
a()
```

- since we know scope of a variable , when a is invoked then a's fec is created then function b is invoked inside a , then another fec is created variable c is not part of b function
- but var c is in function b's lexical environment thus we can access and print it
- function b will have access to the variable c (as we are trying to access it inside b )even after the completion of execution of a function

- In Js we can also pass a function inside a function or can return a function from a function
```js
function x(){
  var a = 8;
  function y(){
    console.log(a)
  }
  a = 100
  return y
}
const z = x()
z()
```
- what will be the output of the above function , at line 22 var a = 8, at line 24 console.log(a) a here is the reference not pointing to var a =8;
- as FEC is created for x a is being shadowed by a = 100 hence line 24 will print 100

### Use of Closures
- Module Design Pattern
- Currying
- Functions like once
- Memoize
- Maintaining state in async world
- setTimeouts
- Iterators
