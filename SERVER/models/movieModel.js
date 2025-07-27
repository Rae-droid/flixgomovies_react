const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a movie title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  releaseYear: {
    type: Number,
    required: [true, 'Please add release year'],
  },
  genre: {
    type: [String],
    required: [true, 'Please add at least one genre'],
  },
  duration: {
    type: String,
    required: [true, 'Please add movie duration'],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  poster: {
    type: String,
    required: [true, 'Please add a poster image'],
  },
  backdrop: {
    type: String,
    required: [true, 'Please add a backdrop image'],
  },
  trailerUrl: {
    type: String,
    required: [true, 'Please add a trailer URL'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Movie', movieSchema);