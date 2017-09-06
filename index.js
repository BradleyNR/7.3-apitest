const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const models = require('./models');
const animalController = require('./controllers/animal');
const userController = require('./controllers/user');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const AnonymousStrategy = require('passport-anonymous').Strategy;

const app = express();
app.use(bodyParser.json());

passport.use(new AnonymousStrategy());
passport.use(new BasicStrategy((username, password, done) => {
  models.User.findOne({
    where: {username: username}
  }).then((user) => {
    if (!user) {
      return done(null, false);
    } else if (user.password !== password) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  });
}));

app.get('/', passport.authenticate(['basic', 'anonymous'], {session: false}), userController.detail);
app.get('/animals', passport.authenticate(['basic', 'anonymous'], {session: false}), animalController.list);
app.get('/animals/:id', animalController.detail);
app.post('/users', userController.create);
app.post('/animals', animalController.create);
//lets a user associate themselves with an animal
app.post('/animals/:id/adopt', passport.authenticate('basic', {session: false}), animalController.adopt);

app.listen(3000);
