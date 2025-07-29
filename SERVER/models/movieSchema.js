import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    releaseDate: Date,
    rating: { type: Number, min: 0, max: 10 },
    duration: String,
    posterUrl: String,
    description: String,
    genre: String,
    director: String,
   
    
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
