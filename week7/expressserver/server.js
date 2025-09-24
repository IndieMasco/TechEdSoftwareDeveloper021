// imports
import express from "express";
import cors from "cors";

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
