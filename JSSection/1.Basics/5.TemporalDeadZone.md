- let and const are hoisted ?
   - yes these are also hoisted, but it remains in temporal dead zone

<img width="625" alt="image" src="https://github.com/user-attachments/assets/15b7bad8-40b6-4143-995f-c4515124b1a8" />

```js
let a = 10
console.log(a)
let b = 20
```

- when you run it in browser you will see a and b not being in global space but still they are hoisted, only difference is that it is hoisted at difference memory space as we can see in the image
- if you try to access these variables before its initialization you will get error **Uncaught ReferenceError: Cannot access 'a' before initialization**
- these variable remains in temporal dead zone between the time when it is being hoisted and at the time of initialization , if you try to access during this time you will get error  **Uncaught ReferenceError: Cannot access 'a' before initialization**


```js
console.log(a)
let a = 10
let b = 20
```

-  in code when we start executing, till console.log line variable a remain in temporal dead zone , this variable is being in hoisted in global space hence you will get error saying cannot access before initialization

```
console.log(a)
let a = 10
var b = 20
```

- as we know when variable are declared with var it is being hoisted and can access before initialization as it is hoisted in global space , that's why we are able to access it using window.b or this.b but with the variable which are declared using let or const these variable are not hoisted at glbal space hence when you try to access these variable using global obejct you will get undefined

```
let a = 10
let a = 100
```
- above code has syntax error as we cannot redeclare the same variable
