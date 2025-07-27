import express from 'express';
import mongoose from 'mongoose';
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  uploadMoviePhoto,
} from '../controllers/movieController.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: [String],
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('Movie', MovieSchema);

router
  .route('/')
  .get(getMovies)
  .post(protect, authorize('admin'), createMovie);

router
  .route('/:id')
  .get(getMovie)
  .put(protect, authorize('admin'), updateMovie)
  .delete(protect, authorize('admin'), deleteMovie);

router
  .route('/:id/photo')
  .put(protect, authorize('admin'), uploadMoviePhoto);

export default Movie;