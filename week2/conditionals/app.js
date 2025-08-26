console.log("Hello, World!");

// Conditionals
// Structures that allow us to execute code based on certain conditions

// If (condition) {
//     Action
// }

// Axample

// If (5 is more then 2) {
// Send a message to the console that says: 5 is greater then 2

// Code
if (5 > 2) {
  console.log("5 is more than 2");
}

// More examples

let apple = 5;
let pears = 3;

//TODO; if apples is less then paars, i want to send a message to the console that sats; "you need more spples"

// Pseudo-code
// Of (apples is less than pears) [
// I want to send a message to the console that says; "you need more apples"
// ]

// Code
if (apple < pears) {
  // This condition is falsey --> our code will not run
  console.log("You need more apples");
}

// This is a condition with multiple conditions
if (apple < pears) {
  console.log("You need more apples");
} else if (apple > pears) {
  console.log("You have more apples than pears");
} else if (apples === pears) {
  console.log("You have the same amount of apples as pears");
}
// This statment does not have a condition --> the action will always happen if the previous conditions are not met
else {
  console.log("You have no apples or pears");
}

// Equals operator
// = Is an assignment operator
// == Is a comparison operator
// === Is a strict comparison operator
