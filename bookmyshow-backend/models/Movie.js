const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
  rating: Number,
  genres: [String]
});

module.exports = mongoose.model('Movie', movieSchema);
