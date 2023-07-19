// 1. Generator Functions
function* oddNumberGenerator(){
    let number = 1;
    
    while(true){
        yield number;
        number += 2;
    }
}
// let's create an instance of oddNumberGenerator function
const gen = oddNumberGenerator();

//now generate and print the first 5 odd numbers
for(let i = 0; i < 5; i++){
    console.log(gen.next().value);
}



// 2. First Class Functions : The functions that can be treated just like a variable.

// i) Assigning a function to a variable:
function printName(name) {
    console.log(name);
}
// Assign the function to a variable
var random = printName;

// Access it
random("Mayank");

// ii) Passing a function as an argument to another function:

function passFunction(callback) {
    callback("Mayank")
}

function sayHello(name) {
    console.log(`Hello ${name}! How are you doing?`)
}

passFunction(sayHello);

// iii) Returning a function from another function:

function outerFunction() {
    return function innerFunction() {
      console.log("Inner function is executed!");
    };
  }
  
const inner = outerFunction();
inner(); // Output: Inner function is executed!
  


