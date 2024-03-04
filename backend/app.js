// Require Express
const express = require("express");

// Initialize the application and Middleware
const app = express();

// Listen to the port
app.listen(3000, () => {
  console.log("Listening...");
});

// Routes
// GET request handler
app.get("/books", (request, response) => {
  response.json({ message: "Welcome to the API" });
});
