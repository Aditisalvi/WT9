const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Invalid email or password' });
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false, { message: 'Invalid email or password' });
      return done(null, user);
    });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
