// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Username: String,
    email: { type: String, unique: true },
    password: String,


  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
