- Js is a synchronous single threaded language
- everything that happens in js executed in execution context
- Execution context has two components in it
   -  the first is memory phase (variable environment)
   -  and the second is execution phase (where code is executed one by one) thread of execution

<img src="https://github.com/user-attachments/assets/0b04fbef-4515-450d-b2e6-ce56ef25bd61" width=400>

- as in the image we can see how js script executes the code
- js starts executing code two phases as we read above , memory phase and execution phase
- memory will be given to all the variable and function
- let's assume for now all the variable created by var keyword
- variable n will have undefined then function will be copied exactly the same in execution context
- then two variables rad1 and rad2 will be assigned memery and assigned as undefined

- now once the exeution part starts it start execution from line 1 and assign n = 2 to the variable
- then function which has already been stoed in the memory
- now function has been invoked, a new functional execution context is created , js will see in its memory if it has function or not since this function was stored at time of memory phase thus it will execute this function in function execution context and store the result in rad1 variable
- similarly for rad2 variable

- now these execution context are being created everytime and deletion at the time when functional execution is completed , how js is handling all these ,
- js handles it very beautifully , by using call stack , a GEC is created and kept in the stack , a new functioncal execution context (fec) is pushed in to the stack once the functional execution is over fec is popped out  
