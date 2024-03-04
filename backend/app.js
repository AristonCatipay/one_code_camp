// // Require Express
// const express = require("express");

// // Initialize the application and Middleware
// const app = express();

// // Listen to the port
// app.listen(3000, () => {
//   console.log("Listening...");
// });

// // Routes
// // GET request handler
// app.get("/books", (request, response) => {
//   response.json({ message: "Welcome to the API" });
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
mongoose
  .connect("")
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening port ${port} and connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });

app.get("/books", (request, response) => {
  response.json({ message: "Welcome to the API" });
});
