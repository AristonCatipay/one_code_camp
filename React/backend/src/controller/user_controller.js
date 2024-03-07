const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user_model");

const registerUser = async (request, response) => {
  const { username, password } = request.body;

  try {
    const exists = await User.findOne({ username });
    if (exists) {
      return response
        .status(400)
        .json({ error: "Username is already in use." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });
    response.status(201).json({ newUser });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const loginUser = async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return response.status(400).json({ error: "User is not found." });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return response.status(400).json({ error: "Incorrect password." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    response.status(201).json({ username: user.username, token });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
