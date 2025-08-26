console.log("hello!");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

getMyStuffFromOverThere();

//==============================================================================

async function repo1() {
  const response = await fetch(
    "https://api.github.com/repos/IndieMasco/TechEdSoftwareDeveloper021"
  );
  //   console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
  return json.stargazers_count;
}

repo1();

async function repo2() {
  const starCount = await repo1();
  const textBox = document.createElement("p");
  textBox.textContent = starCount;
  document.body.appendChild(textBox);
}

repo2();
