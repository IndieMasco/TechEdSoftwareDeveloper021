import express from "express";

const app = express();

// your routes will go here...

app.listen(3000, function () {
  console.log("Server is listening on port 3000...");
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});
