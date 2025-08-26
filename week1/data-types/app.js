// Data type : string
let myname = "John";

// Data type : number
let mynumber = 30;

String;
let moredata = "45";

// Date type : boolean : can only be true or false
let iswarm = true;
let issunny = false;

console.log(myname + " " + mynumber);

// Template literals
console.log(`My name is ${myname} and I am ${mynumber} years old.`);

console.log(typeof iswarm); // Boolean
console.log(typeof myname); // String
console.log(typeof mynumber); // Number
console.log(typeof moredata); // String

let newvariable;

console.log(typeof newvariable); // Undefined

// Type coercion
// This is a number
// Let myNumber = 30;
// This is a string
// Let myOtherNumber = "45";

let sum = myNumber + myOtherNumber;
console.log(sum); // 3045

let a = 10;
let b = 20;

let compare = a > b;
console.log(compare); // False

let x = 10;
let y = "10";

// One equals sign is for DECLARING
// Two equals signs is for comparing
// Three equals signs is for strict comparison
let equalcompare = x === y; // Loose equality

// I want to store the value of NOTHING in a variable
let myEmptyVariable = null; // Null is an empty value
console.log(myEmptyVariable);
// You can use a null value when you dont want to show
