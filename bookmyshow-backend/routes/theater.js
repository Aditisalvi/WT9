const express = require('express');
const router = express.Router();
const Theater = require('../models/Theater');

router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
