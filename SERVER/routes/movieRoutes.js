const express = require('express');
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  uploadMoviePhoto,
} = require('../controllers/movieController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

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

export  default router;