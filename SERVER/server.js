import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import connectDB from "./config/db.js";


// Routes
import authRoutes from "./routes/auth.js";

import userDataRoute from "./routes/userDataRoute.js";
import User from "./models/User.js";
import { requireAuth } from "../SERVER/middlewares/auth.js";
import movieRoute from "./routes/movieRoute.js";


dotenv.config();
const app = express();

// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// app.post(
//   "/api/paystack/webhook",
//   express.raw({ type: "application/json" }),
//   paystackRoutes
// );
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/user", userDataRoute);
app.get("/api/isAuth", requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ message: "Access granted", user });
});
app.get("/api/user/:id", requireAuth, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});
app.use('/api/movie', movieRoute);

app.use(express.json());

// Start
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
