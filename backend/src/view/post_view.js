const express = require("express");
const router = express.Router();
const getPosts = require("../controller/post_controller");

router.get("/", getPosts);

module.exports = router;
