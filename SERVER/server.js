import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import "./cronJobs/investmentPayout.js";

// Routes
import authRoutes from "./routes/auth.js";
import walletRoutes from "./routes/wallet.js";
import investmentRoutes from "./routes/investment.js";
import dashboardRoutes from "./routes/dashboard.js";
import transactionRoutes from "./routes/transactions.js";
import userDataRoute from "./routes/userDataRoute.js";
import User from "./models/User.js";
import { requireAuth } from "./middleware/auth.js";
import paystackRoutes from "./routes/paystack.js";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.post(
  "/api/paystack/webhook",
  express.raw({ type: "application/json" }),
  paystackRoutes
);
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/user", userDataRoute);
app.get("/api/isAuth", requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ message: "Access granted", user });
});
app.use("/api/wallet", walletRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/paystack", paystackRoutes);

app.use(express.json());

// Start
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
