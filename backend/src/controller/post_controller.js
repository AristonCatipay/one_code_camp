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

// Update Post
const updatePost = async (request, response) => {
  const { title, author, description, likes, comment } = request.body;
  const postId = request.params.postId;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        author,
        description,
        likes,
        comment,
      },
      { new: true } // Return the updated document
    );

    if (!updatedPost) {
      return response.status(404).json({ error: "Post not found" });
    }

    response.status(200).json(updatedPost);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Delete Post
const deletePost = async (request, response) => {
  const postId = request.params.postId;

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return response.status(404).json({ message: "Post not found" });
    }
    response.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
