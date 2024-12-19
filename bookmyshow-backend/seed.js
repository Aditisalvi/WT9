const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Theater = require('./models/Theater');
const Showtime = require('./models/Showtime');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://aditisalvi:yWwsKGkmJ2oqezAU@cluster0.ozhpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

async function seedData() {
  try {
    // Insert Movies
    const movies = await Movie.insertMany([
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        releaseDate: new Date('2023-01-01'),
        rating: 4.5,
        genres: ['Action', 'Adventure']
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        releaseDate: new Date('2023-02-15'),
        rating: 4.0,
        genres: ['Comedy', 'Romance']
      },
      // Add more movies
    ]);

    // Insert Theaters
    const theaters = await Theater.insertMany([
      {
        name: 'Theater 1',
        address: 'Address 1',
        city: 'City 1',
        state: 'State 1',
        country: 'Country 1'
      },
      {
        name: 'Theater 2',
        address: 'Address 2',
        city: 'City 2',
        state: 'State 2',
        country: 'Country 2'
      },
      // Add more theaters
    ]);

    // Insert Showtimes
    await Showtime.insertMany([
      {
        movie: movies[0]._id,
        theater: theaters[0]._id,
        showtime: new Date('2023-05-01T10:00:00'),
        seats: ['A1', 'A2', 'B1', 'B2']
      },
      {
        movie: movies[1]._id,
        theater: theaters[1]._id,
        showtime: new Date('2023-05-01T14:00:00'),
        seats: ['C1', 'C2', 'D1', 'D2']
      },
      // Add more showtimes
    ]);

    console.log('Data seeded successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.disconnect();
  }
}

seedData();
