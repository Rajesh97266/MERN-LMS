const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  //Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ userEmail }, { userName }],
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Email or Username already in use", success: false });
  }

  //Hash password
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    userEmail,
    password: hashPassword,
    role,
  });

  await newUser.save();
  res
    .status(201)
    .json({ message: "User registered successfully", success: true });
};

const loginUser = async (req, res) => {
  const { userEmail, password } = req.body;
};

module.exports = { registerUser };
