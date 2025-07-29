// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://samuelowuss36:Peaf4LmTQfAyDR95@cluster0.uppd6wb.mongodb.net/my_Database');

    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
