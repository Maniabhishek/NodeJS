### Call
- this method in js is used to invoke a method , where we can replace any other object , in simple words a function can be used and called with a different other objects
- lets understand it with an example
```ts
const obj = {
    firstName: "Abhishek",
    lastName: "mani",
    printFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

obj.printFullName()
```

- but i want to use this printFullName method with some other object how can we do that
```ts
const obj2 = {
    firstName: "ABC",
    lastName: "DEF"
}

obj.printFullName.call(obj2)
``` 

- we can also have a seperate function and can use these methods
```ts
const obj = {
    firstName: "Abhishek",
    lastName: "mani",
    
}

let printFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

printFullName.call(obj)

const obj2 = {
    firstName: "ABC",
    lastName: "DEF"
}

printFullName.call(obj2)
```

-  now suppose we have arguments to pass in a function how will we do that
```ts
const obj = {
    firstName: "Abhishek",
    lastName: "mani",
    
}

let printFullName = function(city, state){
        console.log(`${this.firstName} ${this.lastName} live in ${city} ${state}`)
    }

printFullName.call(obj, "bangalore", "karnataka")

const obj2 = {
    firstName: "ABC",
    lastName: "DEF"
}

printFullName.call(obj2, "xyz", "zab")
```

### apply method
- in case of apply methid it is similar to call method only difference is that while passing the arguments we need to pass it in array

```ts
const obj = {
    firstName: "Abhishek",
    lastName: "mani",
    
}

let printFullName = function(city, state){
        console.log(`${this.firstName} ${this.lastName} live in ${city} ${state}`)
    }

printFullName.apply(obj, ["bangalore", "karnataka"])

const obj2 = {
    firstName: "ABC",
    lastName: "DEF"
}

printFullName.apply(obj2, ["xyz", "zab"])

```

### bind 
- with bind it is similar to call method only difference is that it doesn't invoke the method immediately but it returns new method which can be called later

```ts
const obj = {
    firstName: "Abhishek",
    lastName: "mani",
    
}

let printFullName = function(city, state){
        console.log(`${this.firstName} ${this.lastName} live in ${city} ${state}`)
    }

const printFullName1 = printFullName.bind(obj, "bangalore", "karnataka")
printFullName1()

const obj2 = {
    firstName: "ABC",
    lastName: "DEF"
}

const printFullName2 = printFullName.bind(obj2, "xyz", "zab")
printFullName2()
```
