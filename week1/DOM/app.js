console.log(document.head);

console.log(window);

console.dir(document);

//how to manipulate the DOM

//STEP 1
// we need to SELECT the object that contains the element we want to affect
const myH2 = document.getElementById("title");
console.log(myH2);

// querySelector will select HTML element using Id, Class or element name

const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

// STEP 2
//Make changes to selected element
myH2.textContent = "Hello World!";

//To create a new element
const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200/300";
newImg.alt = "Random Image";
console.log(newImg);

// STEP 3
// appending the element to the DOM
mainContainer.appendChild(newImg);

document.body.style.fontFamily = "monospace";
document.body.style.backgroundColor = "lightblue";

///OPTINAL STEP 4
//Removing an element from the DOM
const myH1 = document.querySelector("h1");
myH1.remove();
