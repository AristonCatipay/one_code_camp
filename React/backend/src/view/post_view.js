const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/post_controller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getPosts);
router.post("/", authMiddleware, createPost);
router.put("/:postId", authMiddleware, updatePost);
router.delete("/:postId", authMiddleware, deletePost);

module.exports = router;
