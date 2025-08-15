Data type : string
let myname = "John";

Data type : number
let mynumber = 30;

String
let moredata = "45";

Date type : boolean : can only be true or false
let iswarm = true;
let issunny = false;

console.log(myname + " " + mynumber);

template literals
console.log(`My name is ${myname} and I am ${mynumber} years old.`);

console.log(typeof iswarm); // boolean
console.log(typeof myname); // string
console.log(typeof mynumber); // number
console.log(typeof moredata); // string

let newvariable;

console.log(typeof newvariable); // undefined

type coercion
this is a number
let myNumber = 30;
this is a string
let myOtherNumber = "45";

let sum = myNumber + myOtherNumber;
console.log(sum); // 3045

let a = 10;
let b = 20;

let compare = a > b;
console.log(compare); // false

let x = 10;
let y = "10";

one equals sign is for DECLARING
two equals signs is for comparing
three equals signs is for strict comparison
let equalcompare = x === y; // loose equality


i want to store the value of NOTHING in a variable
let myEmptyVariable = null; // null is an empty value
console.log(myEmptyVariable);
you can use a nukll value when you dont want to show
