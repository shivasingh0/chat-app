import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/generateToken.js";

//----- register user -----//
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //   check the fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  //   check existing user in database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(403).json({ message: "User already exists" });
  }

  // create new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

//----- login user -----//
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check the fields
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  // check existing user in database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // check password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }
  // generate token
  const token = generateToken(user._id);
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    pic: user.pic,
    token,
  });
});

//----- search api -----//
export const searchUser = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {}; 
    
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

// get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  // Validate that users were found
  if (!users || users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }
  res.status(200).json(users);
});

// get user by id
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  // Validate that the user was found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});

// update user
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  // Validate that the user was found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});

// delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  // Validate that the user was found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User deleted" });
});
