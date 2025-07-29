// controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
// import transporter from "../config/nodemailer.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    // Check if user already exists

    if (existingUser)
      return res.json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    // Generating a JWT token and setting it as a cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Sending a welcome email
    // const mailOption = {
    //   from: process.env.SENDER_EMAIL,
    //   to: email,
    //   subject: "Welcome to Growella",
    //   text: `Hello ${name} , Welcome to our website. Your account has been created successfully`,
    // };

    // await transporter.sendMail(mailOption);
    res.json({
      success: true,
      token,
      message: "Registration successful",
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validating Input
    if (!email || !password) {
      res.json({ success: false, message: "All fields required" });
    }

    //searching for user with the provided email
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "Invalid email or password" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid email or password" });

    //generating a token and sending it as a response
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
        totalInvested: user.totalInvested,
        totalProfit: user.totalProfit,
      },
    });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};
