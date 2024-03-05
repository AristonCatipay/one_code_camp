require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json()); // Make the data readable.

// Routes
app.use("/api/posts", require("./src/view/post_view"));

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Listening port ${process.env.PORT} and connected to MongoDB`
      );
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });

app.get("/books", (request, response) => {
  response.json({ message: "Welcome to the API" });
});
