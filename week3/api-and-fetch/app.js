// TODO: I want to get images data from an API and render the images on the DOM

// TODO: I want to get images data from an API

async function getFoxes() {
  const response = await fetch("");
  const data = await response.json();
  conaole.log(data);
  // Filtering the data to the properties that we need --> data wrangling
  const wrangledData = data.image;
  console.log("wrangledData");
  return wrangledData;
}

getFoxes();

// TODO: Render the images on the DOM

function createFoxImage(foxUrl) {
  const foxesContainer = document.getElementById("foxes-container");
  const foxImage = document.createElement("img");
  // Update the values of src & alt to match the foxes data
  foxImage.src = foxUrl;
  foxImage.alt = "A randomly-generate image of a fox in nature";
  foxesContainer.appendChild(foxImage);
}

// TODO: To put the data and the image together

async function addFoxDataToImage() {
  const foxesData = await getFoxes();
  createFoxImage(foxesData);
}
addFoxDataToImage;
