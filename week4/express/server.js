// Import express from our node_modules
import express from "express";

// Instantiate our express (create an instance of)
const app = express();

// Our data (later, we can replace this with information got from a database)
const bananas = [
  { varietal: "Red", taste: "Hot" },
  { varietal: "Cavendish", taste: "Sweet" },
  { varietal: "Blue Java", taste: "Ice cream" },
  { varietal: "Manzano", taste: "Banana" },
];

// Our root endpoint
app.get("/", function (request, response) {
  response.send("You are looking at my root route. How roude!");
});

// Bananas endpoint
app.get("/bananas", function (request, response) {
  response.json(bananas);
});

// Random banana endpoint
app.get("/random", function (request, response) {
  const randomBanana = bananas[Math.floor(Math.random() * bananas.length)]; // Returns a single item from the array
  response.json(randomBanana);
});

// Start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});