-  let's understand it with an example
```js
var x = 4;
function printName(){
console.log("hoisting")
}

printName()
console.log(x)
```
- now execution of above code
- a GEC is created in the stack , memory phase will be executed first where each variable will get the memory like var x will have undefined , function will be copied and given memory
- afer that execution starts
- o/p is hoisting and then prints variabe x 4

- now let's do some changes with code

```js
printName()
console.log(x)

var x = 4;
function printName(){
console.log("hoisting")
}

```

-  now try to run the above code
-  you will find that printName function is executed successfully and x value is printed as undefined
- why is it undefined , it simple during the memory phase javascript moves all the variabled on the top or assignes the memory to all the variables
- so during memory phase var x has undefined and then printName function is also stored in the memory
- after the memory phases execution phase start it see funciton has been invoked before initialization but it wont throw any error as function has been hoisted already during the memory phase or function has been assigned memory during the memory phase and hence it executes the function even before intialization
- then we are trying to print the variable x even for declaration but in js variable has already been hoisted or assigned memory during the memory phase where js assignes those variable as undefined
- hence undefined is printed when you try to access those variable before its initialization

- now what if we remove the variable x totally , and then try to access ,it will throw us error uncaught rference error x is not defined
- so these two undefined and not defined are totally different
- hositing is basically a phenomena where you can still access these variable before initialization

#### Hoisting in JavaScript is a mechanism where declarations of variables, functions, and classes are moved to the top of their scope before code execution. 
