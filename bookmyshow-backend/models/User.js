const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = mongoose.model('User', userSchema);
