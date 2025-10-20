console.log("Hello, World!");

// Functions

function sayHello() {
  console.log("Hello, how are you? I hope you're having a great day!");
}

sayHello();
sayHello();
sayHello();

//=====================================================

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("good afternoon", "Bob");
greet("have a good evening", "Jimmy");
greet("do you like waffles", "Alice");

//=====================================================

function add(a, b) {
  return a + b;
}

const result = add(5, 5);
console.log("The result is", result);
const anotherResult = add(22, 10);
console.log("Another result is", anotherResult);

//=====================================================

function multiply(a, b) {
  return a * b;
}

const product = multiply(10, 3);
console.log("The product is", product);
const anotherProduct = multiply(2, 100);
console.log("Another product is", anotherProduct);

//=====================================================

function subtract(a, b) {
  return a - b;
}

const difference = subtract(1000, 666);
console.log("The difference is", difference);
const anotherDifference = subtract(1, 2);
console.log("Another difference is", anotherDifference);

//=====================================================

function divide(a, b) {
  return a / b;
}

const quotient = divide(500, 4);
console.log("The quotient is", quotient);
const anotherQuotient = divide(1, 2);
console.log("Another quotient is", anotherQuotient);

//=====================================================

function calculate(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  } else {
    return "Invalid operation";
  }
}

// const sum = calculate(10, 90, "add");
// console.log("Sum:", sum);
// const difference = calculate(10, 20, "subtract");
// console.log("Difference:", difference);
// const product = calculate(10, 8, "multiply");
// console.log("Product:", product);
// const quotient = calculate(555, 5, "divide");
// console.log("Quotient:", quotient);
// const invalid = calculate(5, 5, "modulus");
// console.log("Invalid operation result:", invalid);

//======================================================

// Function Scope

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");
greet("Charlie");
greet("Diana");
greet("Eve");
