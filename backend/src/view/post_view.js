const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
} = require("../controller/post_controller");

router.get("/", getPosts);
router.post("/", createPost);
router.put("/:postId", updatePost);

module.exports = router;
