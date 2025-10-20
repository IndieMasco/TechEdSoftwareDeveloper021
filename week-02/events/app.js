console.log("hello world!");

// Events
// Structure

// Interactive DOM element
// Make sure that the user knows the DOM element is interactive --> cursor change, hover effects
const eventButton = document.getElementById("event-button");
console.log(eventButton);

// Event handler --> its the action that will trigger when the user interacts with the event

function handleClick() {
  console.log("I Clicked!");
}

// Event listener --> its the type of interaction the user will do to trigger the handler (click)

eventButton.addEventListener("click", handleClick);

//==============================================
// TODO: when the user clicks on the button a paragrath appers on the page

const paragraphButton = document.getElementById("paragraph-button");

function handleCreateParagraph() {
  //create a DOM element to store our content
  const paragraph = document.createElement("p");
  paragraph.textContent = "Thank you for clicking";
  //append this paragraph to the DOM
  const paragraphContainer = document.getElementById("paragraph-container");
  paragraphContainer.appendChild(paragraph);
}

paragraphButton.addEventListener("click", handleCreateParagraph);
