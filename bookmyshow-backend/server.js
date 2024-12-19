const express = require('express');
const app = express();
const cors = require('cors');
const movieRouter = require('./routes/movie');
const theaterRouter = require('./routes/theater');
const showtimeRouter = require('./routes/showtime');

app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRouter);
app.use('/api/theaters', theaterRouter);
app.use('/api/showtimes', showtimeRouter);

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
