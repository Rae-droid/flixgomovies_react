// routes/auth.js
import express from "express";
import { SignIn, Register } from "../controllers/authController.js";

const router = express.Router();


router.post("/Register", Register);
router.post("/SignIn", SignIn);

export default router;
