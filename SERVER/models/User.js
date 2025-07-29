// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    paymentMethod: { type: String, required: false },
    paymentNumber: {
      type: String,
      required: false,
    },
    unPaidWithdrawals: { type: Array, default: [], required: false },
    balance: { type: Number, default: 0 },
    totalInvested: { type: Number, default: 0 },
    totalProfit: { type: Number, default: 0 },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
