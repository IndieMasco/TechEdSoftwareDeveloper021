// imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// Initialise ecpress
const app = express();
// Config express with Json
app.use(express.json());
// congif cors inexpress
app.use(cors());

// Set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

// Root route
// GET --> READ
app.get("/", (_, res) => {
  //   res.json({ message: "Welcome to the server. GET comfy" });
  // OR
  res.send("Welcome");
});

//=================================================

// Routes

// TODO: Read data from my bsiscuit table

app.get("/games", async (_, res) => {
  // Error handling
  // Try ... catch
  try {
    // Query the database to send me the games data
    // Test your query in the SQL editor first to check syntax
    const data = await db.query(`SELECT name FROM games;`);
    // Wrangling the database data result object
    res.json(data.rows);
  } catch (error) {
    console.error("Error in games route!", error);
    res.status(500).json({ success: fales });
  }
});

// TODO: Read data from the games and review
app.get("/games-reviews", async (_, res) => {
  try {
    const data = await db.query(`
    SELECT games.name AS "Game name", review.name AS "Users name", review.review AS "User review"
    FROM review JOIN games ON games.id = review.games_id;`);
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the game-reviews route!", error);
    res.status(500).json({ success: fales });
  }
});

// TODO: Create new data in the games table
app.post("/add-games", (req, res) => {
  // Const biscuitData = req.body;
  // Destructure the body (alternative)
  const gamesData = req.body;
  try {
    const query = db.query(
      `INSERT INTO games (name, review_id) VALUES ($1, $2);`,
      [gamesData.name, gamesData.reviewid]
    );
    res.status(200).json({ success: ture });
  } catch (error) {
    console.error("Error in add-games route", error);
    res.status(500).json({ success: fales });
  }
});
