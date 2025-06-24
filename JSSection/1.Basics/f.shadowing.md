```js
var a  = 10
{
  var a = 100
  let b = 20
  const c = 30
  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(a)
console.log(b)
console.log(c)

```

- above code has block and var a has been declared first and then a block , now var a will hoisted inside the global space
- where as the block will have a different scope all the variable with let and cosnt cannot cross the boundary of scope but where as var variable can cross the border of scope and will be part of global scope or outer most possible scope
- thus line 7 8 9 will print 100, 20, 30 respectively
- and line 11 will print a as 100 , this variable will cross the boundary of scope, hence 100 will be printed ans this is known as shadowing
- next line will throw error as there is no b variable

```js
let a = 10
{
  var a = 100
}
```

- illegal hoisting - aobve code will throw error, as in the global space we have let a variable and then with let there cannot be duplicate variable , and inside block we have var a = 100
- var will cross the block boundary and will go to the global scope and js sees the conflict and hence throws the error
- same with const as well

```js
var a = 100
{
  let a = 100
}
```
- above code is perfect and legal shadowing inside block
- from outside if you try to access a , 100 will be returned

```js
let a = 100
function abc(){
  var a = 10
  console.log(a)
}
```

- above code where we are declaring var a , this is correct as var a cannot cross the block boundary since it is a function
- same with arrow functions
