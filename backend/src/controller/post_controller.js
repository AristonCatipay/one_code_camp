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

// Create Post
const createPost = async (request, response) => {
  const { title, author, description, likes, comment } = request.body;

  try {
    const post = await Post.create({
      title,
      author,
      description,
      likes,
      comment,
    });
    response.status(200).json(post);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { getPosts, createPost };
