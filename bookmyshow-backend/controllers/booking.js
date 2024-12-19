const Booking = require('../models/Booking');

exports.createBooking = (req, res) => {
  const booking = new Booking({
    user: req.user._id,
    movie: req.body.movie,
    showtime: req.body.showtime,
    seats: req.body.seats
  });

  booking.save((err, booking) => {
    if (err) return res.status(400).send(err);
    res.json(booking);
  });
};

exports.getBookings = (req, res) => {
  Booking.find({ user: req.user._id })
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).send(err));
};
