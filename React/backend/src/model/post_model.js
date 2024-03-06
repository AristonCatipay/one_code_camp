const mongoose = require("mongoose");

// Schema - Sets the structure of the database.

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number },
  comment: [{ body: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
