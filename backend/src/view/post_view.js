const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controller/post_controller");

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
