import Movie from '../models/movieModel.js';
import ErrorResponse from '../utils/errorResponse.js';
import path from 'path';
import fs from 'fs';

// @desc    Get all movies
// @route   GET /api/v1/movies
// @access  Public
export const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate('createdBy', 'name email');
    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single movie
// @route   GET /api/v1/movies/:id
// @access  Public
export const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id).populate(
      'createdBy',
      'name email'
    );
    if (!movie) {
      return next(
        new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new movie
// @route   POST /api/v1/movies
// @access  Private/Admin
export const createMovie = async (req, res, next) => {
  try {
    req.body.createdBy = req.user.id;
    const movie = await Movie.create(req.body);
    res.status(201).json({
      success: true,
      data: movie,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update movie
// @route   PUT /api/v1/movies/:id
// @access  Private/Admin
export const updateMovie = async (req, res, next) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return next(
        new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404)
      );
    }
    if (movie.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(
        new ErrorResponse(
          `User ${req.user.id} is not authorized to update this movie`,
          401
        )
      );
    }
    movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete movie
// @route   DELETE /api/v1/movies/:id
// @access  Private/Admin
export const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return next(
        new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404)
      );
    }
    if (movie.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(
        new ErrorResponse(
          `User ${req.user.id} is not authorized to delete this movie`,
          401
        )
      );
    }
    await movie.remove();
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Upload photo for movie
// @route   PUT /api/v1/movies/:id/photo
// @access  Private/Admin
export const uploadMoviePhoto = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return next(
        new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404)
      );
    }
    if (!req.files) {
      return next(new ErrorResponse(`Please upload a file`, 400));
    }
    const file = req.files.file;
    if (!file.mimetype.startsWith('image')) {
      return next(new ErrorResponse(`Please upload an image file`, 400));
    }
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return next(
        new ErrorResponse(
          `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
          400
        )
      );
    }
    file.name = `photo_${movie._id}${path.parse(file.name).ext}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      await Movie.findByIdAndUpdate(req.params.id, { photo: file.name });

      res.status(200).json({
        success: true,
        data: file.name,
      });
    });
  } catch (err) {
    next(err);
  }
};