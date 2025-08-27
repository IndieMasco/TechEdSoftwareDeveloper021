console.log("HELLO!");

// TODO: CLick a button to show text for 5 seconds

// linking HTML with my JS
const button = document.getElementById("button");
const text = document.getElementById("text");

// Add event listener
// Make text visible
button.addEventListener("click", () => {
  text.style.visibility = "visible";

  // Hiding text
  setTimeout(() => {
    text.style.visibility = "hidden";
  }, 5000);
});
