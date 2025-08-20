console.log("hello world!");

//events
//structure

//interactive DOM element
const event = document.getElementById("event-button");
console.log(eventButton);

// event handler --> its the action that will trigger when the user interacts with the event

function handleClick() {
  console.log("I Clicked!");
}

// event listener --> its the type of interaction the user will do to trigger the handler (click)

eventButton.addEventListener("click", handleClick);
