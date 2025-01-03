# NodeJS

All About nodejs
## More on Nodejs

Instead of writing code in machine code , most developers write code in high level languages
There is no spectrum of deciding low or high level languages
In orer to execute high level code the computer uses : 1. Interperater (take source code and directly execte it by taking realtime intermediate steps, but they don't leave anything behind like compiler do , they leave executable file) 2. Compiler (take source code and converts it into an executable file a file full of code the computer can execute) 3. Transpilers (take source code and converts it into source code of another type for example., typescript convert ts code to js code)

### What is NodeJS ?

Nodejs is server-side javascript runtime environment, which means Nodejs is server side application that runs on any os to execute the js code which further sends it to v8 engine .

### what is V8 engine ?

We can understand it as car's engine , and Nodejs is anything that make a car ,and we are the driver.
So what if we don't have v8 engine it would be same as car without any engine
NodeJs is a c++ application that embeds the v8 js engine

### Nodejs presents itself as a two application

1. A script processor
2. A REPL (Read Evaluate Print Loop)

#### lets understand Script Processor

when we write `node someFile.js` then node js will open the file and process the command within it
well it is more complicated than this
