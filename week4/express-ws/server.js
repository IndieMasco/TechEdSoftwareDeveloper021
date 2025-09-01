import express from "express";

const app = express();

app.listen(8080, function () {
  console.log("App is running on port 8080");
});

// your routes will go here...

// app.listen(3000, function () {
//   console.log("Server is listening on port 3000...");
// });

// app.get("/messages", function (request, response) {
//   response.json({ message: "Hello, World!" });
// });

//=========================================================================

app.get("/games", function (request, response) {
  const games = [
    {GameName: "Cookie Clicker", TimePlayed: "97 hours", Achivements: "77/637"},
    {GameName: "Bloons TD 6", TimePlayed: "98.5 hours", Achivements: "143/153"},
    {GameName: "FInal Fantasy 7 Ever Crisis", TimePlayed: "480.8 hours", Achivements: "63/63"},
    {GameName: "Enshrouded", TimePlayed: "330.1 hours", Achivements: "45/45"},
    {GameName: "Valheim", TimePlayed: "357.2 hours", Achivements: "N/A"}]
  response.json(games);
})

//=========================================================================
