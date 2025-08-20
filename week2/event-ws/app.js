console.log("HELLO BEAUTIFUL PEOPLE");

//===============================================

const button = document.querySelector("button");

console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

//=================================================

const teaButton = document.getElementById("tea-button");

function handleCreateTea() {
  const tea = document.createElement("p");
  tea.textContent =
    "Here is your caffeine fix for the day please come back again";
  const teaContainer = document.getElementById("tea-container");
  teaContainer.appendChild(tea);
}

teaButton.addEventListener("click", handleCreateTea);

const mouseout = document.getElementById("tea-button");

function handleMouseOut() {
  const teaButton = document.getElementById("tea-button");
}

teaButton.addEventListener("mouseout", handleMouseOut);
