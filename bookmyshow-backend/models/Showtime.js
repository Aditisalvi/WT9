const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
  showtime: Date,
  seats: [{ type: String }]
});

module.exports = mongoose.model('Showtime', showtimeSchema);
