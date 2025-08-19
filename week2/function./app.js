console.log("Hello, World!");

// functions
// a reusable block of code that performs a task

// TODO: i want to say hi to joe
// structure
// function functionNameTask(optionalPrameters){}

function sayHi() {
  console.log("Hi Joe!");
}

// we need to call out function to be executed
// sayHi();

function sayHi(username) {
  console.log(`Hi ${username}!`);
}

function greetUser(username, greeting) {
  console.log(`${greeting} ${username}!`);
}

greetUser("Joe", "Hello");
greetUser("Jane", "Goodbye");

// our funtions have a specific scope --> block scope / function scope

function add() {
  let a = 5;
  let b = 10;
  console.log(a + b);
}
// console.log(a); // this will throw an error because 'a' is not defined in this scope
add();

// if we want to take an element inside a function ( block scope) and make it accessible to the rest of out app (global scope) we can use the keyword return

function addtwo(a, b) {
  return a + b;
}

console.log(addtwo(5, 10));
