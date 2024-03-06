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
