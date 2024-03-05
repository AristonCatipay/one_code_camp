const Post = require("../model/post_model");

// Read Posts
const getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.status(200).json(posts);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = getPosts;
