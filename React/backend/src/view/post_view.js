const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/post_controller");

router.get("/", getPosts);
router.post("/", createPost);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);

module.exports = router;
