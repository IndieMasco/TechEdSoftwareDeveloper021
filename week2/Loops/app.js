console.log("This is the app.js file in the Loops directory of week2.");

// loops --> we will repear a task a specific amount. for example i want to create 5 paragraphs in my HTML
// structure
// for (loop set-up) {
// the task to be executed

// for (initialisation; condition; afterthought) {
// action
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

// simplified for loops
// these for loops work in the same way but they syntax is simpler

// for ... of
// let subject --> this represents each item in the array
// of subjects --> this is the condition (length is included)
// the afterthought is implied
for (let subject of subjects) {
  console.log(subject);
}

// forEach()
// a methed --> a JS default function
// structure
subjects.forEach(function (subject) {
  console.log(subject);
});

//TODO: i want to render <display, show) 3 images in my page
// - i need a container to hold the images ✅
// - i need a loop to perform a repetitve task (for the loop)
// - i need the image source and alt text ✅
// - i need to store the images data ✅
// - i need create and add the images to the DOM

let imgURLs = [
  "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfDB8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfDB8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1601758176481-e81a6b713126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfDB8MHx8fDI%3D",
];

let altText = ["A beautiful dog", "A cute puppy", "A lovely dog"];

//select the container
const imageContainer = document.querySelector(".image-container");
for (let i = 0; i <= altText.length; i++) {
  // create the image element
  const pTag = document.createElement("p"); //<p></p>
  pTag.textContent = altText[i]; // add the text to the p tag
  pTag.className = "alt-text"; // add a class to the p tag
  imageContainer.appendChild(pTag); // add the p tag to the container
}
