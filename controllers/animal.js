const models = require('../models');


module.exports = {
  list: (req, res) => {
    //req.query is an object that pulls from the request URL, such as ?isAggressive=true&isWearingHat=false
    console.log(req.query);
    models.Animal.findAll({
      where: req.query
    }).then((animals) => {
      res.json(animals);
    });
  },
  detail: (req, res) => {
    let entryId = req.params.id;
    models.Animal.findById(entryId).then((animal) => {
      res.json(animal);
    })
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
