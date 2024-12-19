const express = require('express');
const router = express.Router();
const Showtime = require('../models/Showtime');

router.get('/', async (req, res) => {
  try {
    const showtimes = await Showtime.find();
    res.json(showtimes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
