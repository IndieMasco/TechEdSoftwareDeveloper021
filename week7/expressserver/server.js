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

// TODO: Create new data in the reviews table

app.post("/add-reviews", (req, res) => {
  // const reviewsData = req.body;
  // Destructure the body (alternative)
  const { name, review, gamesid } = req.body; // THIS IS THE BODY

  try {
    const query = db.query(
      `INSERT INTO review (name, review, games_id) VALUES ($1, $2, $3);`,
      [name, review, gamesid]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in add-reviews route", error);
    res.status(500).json({ success: false });
  }
});

// TODO: Delete an entry from my review table

app.delete("/delete-review/:id", (req, res) => {
  try {
    // The request has an object called params
    const paramsId = req.params.id;
    // OR
    // Destructure the params object
    // const { id } = req.params;

    // Query the database to delete one entry
    const query = db.query(`DELETE FROM review WHERE id = $1 RETURNING*;`, [
      paramsId,
    ]);
  } catch (error) {
    console.error("error in the delete-review route", error);
    res.status(500).json({ success: false });
  }
});

// TODO: Update an entry in my review table

app.put("/update-review/:id", (req, res) => {
  try {
    const paramsId = req.params.id;
    const newData = req.body; // Using body from Create
    // Query my database to update ONE entry
    // What specific entry? --> dynamic paramter
    // What data do you want to add in place for the current data? --> body

    const query = db.query(
      `UPDATE review SET name = $1, review = $2, games_id = $3 WHERE id = $4 RETURNING*;`,
      [newData.name, newData.review, newData.gamesid, paramsId]
    );
  } catch (error) {
    console.error("Error in update-review route", error);
    res.status(500).json({ success: false });
  }
});
