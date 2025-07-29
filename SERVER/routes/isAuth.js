import express from "express";
import { requireAuth } from "../middlewares/auth.js";
import User from "../models/User.js"; // Adjust the path as necessary

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ success: true, message: "Access granted", user });
});
export default router;
