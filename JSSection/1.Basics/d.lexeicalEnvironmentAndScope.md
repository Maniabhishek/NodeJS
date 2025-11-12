- scope where you can access a variable that is called as scope


```js
function a(){
  console.log(b)
}

var b = 10
a()
```

- after the execution of the above code when a function is invoked , inside the function it tries to print b but there is no variable b inside function scope then it will look for this variable to the outer scope
- and it finds variable b in global scope, if we remove the var b then it will print not defined

```js
function a(){
  var b = 10
  c()
  function c(){
    console.log(b)
  }
}

a()

console.log(b)
```
 -  the above code execution when tries to access v outside the function a then fec in which b would have created must have been removed when it reached to this line (printing b) then there is no variable b in memory
 -  hence it will throw error as **uncaught reference error: not defined***

<img width=400 src="https://github.com/user-attachments/assets/7f872387-d191-4b0d-b9ae-e2d3ddbe685a">

- when GEC is created , lexical environment also gets created , lexcical environment is nothing but local environment + lexical environment of lexical parent

```js
function a(){
  var b = 10
  c()
  function c(){
    console.log(b)
  }
}

a()

console.log(b)
```

- when we execute the above code function a's execution context will be created on top of GEC and then another FEC will be created for c , now c tries to print b , it will check it in its own scope first then it will check its parent scope which will be a then it finds b there and hence prints b,
- first function b checked its own scope and then its parents scope , this local scope and parents scope this is nothing but lexical environment, the chain of this scope is called as scope chain
