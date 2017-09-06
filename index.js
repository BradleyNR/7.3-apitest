const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const models = require('./models');

const app = express();

app.use(bodyParser.json());

app.post('/animals', (req, res) => {
  models.Animal.create({
    name: req.body.name,
    isAggressive: req.body.isAggressive,
    isWearingHat: req.body.isWearingHat,
    species: req.body.species
  }).then((results) => {
    res.json(results);
  });
});

app.listen(3000);
