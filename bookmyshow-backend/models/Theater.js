const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  country: String
});

module.exports = mongoose.model('Theater', theaterSchema);
