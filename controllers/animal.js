const models = require('../models');

module.exports = {
  list: (req, res) => {
    models.Animal.findAll().then((animals) => {
      res.json(animals);
    });
  },
  create: (req, res) => {
    models.Animal.create({
      name: req.body.name,
      isAggressive: req.body.isAggressive,
      isWearingHat: req.body.isWearingHat,
      species: req.body.species
    }).then((results) => {
      res.json(results);
    });
  }
}
