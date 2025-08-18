console.log("Welcome to the Conditional Statements Workshop!");

// let age = 17;
// let movieRating = "PG";

// if (age > 17) {
//   console.log("You can watch any movie!");
// } else if (age === 17) {
//   if (movieRating === "PG") {
//     console.log("You can watch the movie!");
//   }
//   // ...
// } else {
//   console.log("You cannot watch this movie.");
// }

let weather = "sunny";
let temperature = 30;

if (weather === "sunny" && temperature > 25) {
  console.log("It's a great day for a picnic!");
} else if (weather === "rainy" || temperature < 15) {
  console.log("Maybe stay indoors today.");
} else {
  console.log("Enjoy your day!");
}

let ageGroup = "teenager";
let activity = "skateboarding";
let price = 10;

if (ageGroup === "teenager" && activity === "skateboarding")
  if (price > 10) {
    console.log("You can afford to go skateboarding!");
  } else {
    console.log("You might need to save up a bit more.");
  }

let age = 61;
let clubs = "Golf Club";

if (age >= 60) {
  console.log("You are eligible for a senior discount at the " + clubs + ".");
} else if (age >= 18 && age < 60) {
  console.log("You can join the " + clubs + " at full price.");
} else {
  console.log("You are too young to join the " + clubs + ".");
}
