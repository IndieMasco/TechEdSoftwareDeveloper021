console.log("Hello, World!");

// conditionals
// structures that allow us to execute code based on certain conditions

// if (condition) {
//     action
// }

// example

// if (5 is more then 2) {
//send a message to the console that says: 5 is greater then 2

// code
if (5 > 2) {
  console.log("5 is more than 2");
}

// more examples

let apple = 5;
let pears = 3;

//TODO; if apples is less then paars, i want to send a message to the console that sats; "you need more spples"

// pseudo-code
// if (apples is less than pears) [
// i want to send a message to the console that says; "you need more apples"
// ]

// code
if (apple < pears) {
  //this condition is falsey --> our code will not run
  console.log("You need more apples");
}

// this is a condition with multiple conditions
if (apple < pears) {
  console.log("You need more apples");
} else if (apple > pears) {
  console.log("You have more apples than pears");
} else if (apples === pears) {
  console.log("You have the same amount of apples as pears");
}
// this statment does not have a condition --> the action will always happen if the previous conditions are not met
else {
  console.log("You have no apples or pears");
}

// equals operator
// = is an assignment operator
// == is a comparison operator
// === is a strict comparison operator
