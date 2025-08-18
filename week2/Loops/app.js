console.log("This is the app.js file in the Loops directory of week2.");

// loops --> we will repear a task a specific amount. for example i want to create 5 paragraphs in my HTML
// structure
// for (loop set-up) {
// the task to be executed

// for (initialisation; condition; afterthought) {
//     // action
// }
// initialisation: this is where we set up the loop, we can set a variable to start at 0 or 1
// condition: this is where we set the condition for the loop to continue, for example, i want to loop until i reach 5
// afterthought: this is where we can increment or decrement the variable, for example, i want to add 1 to the variable each time the loop runs

// example
//TODO: i want to send a message to the console 5 times

// console.log("number 1");
// console.log("number 2");
// console.log("number 3");
// console.log("number 4");
// console.log("number 5");

for (let i = 0; i < 5; i++) {
  console.log(`number ${1}`);
}

// increment opertaor ++ --> adds 1 to a value
// decrement operator -- --> subtracts 1 from a value

// && AND operator --> both conditions must be true
// if (movieRating === "pg" && age === 7)

// || OR operator --> one of the conditions must be true
// if (MovieRating ==="18" || age === 18)

// for loops and arrays

let subjects = ["HTML", "CSS", "JavaScript", "Python"];
//TODO: witrw in the console each subject in the array

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}
// the initial value [i] is also reprenting the index number
