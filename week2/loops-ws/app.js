console.log("This is the app.js file in the Loops directory of week2.");

// ======================================================

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

//=======================================================

let sum = 0;
let i = 10;
let j = 20;
let k = 30;

for (let num of numbers) {
  sum += num;
}

console.log("Sum of numbers:", sum);

//=======================================================

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

//=======================================================

let count = 0;

while (count < 5) {
  console.log("Count is:", count);
  count++;
}

//=======================================================

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food, index) {
  console.log(index, food);
});

//=======================================================

let pizza = 100;
let chocolate = 50;
let iceCream = 30;
let cheese = 20;

let totalCost = pizza + chocolate + iceCream + cheese;

console.log("Total cost of foods:", totalCost);

//=======================================================
