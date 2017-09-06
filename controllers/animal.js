const models = require('../models');


module.exports = {
  list: (req, res) => {
    //req.query is an object that pulls from the request URL, such as ?isAggressive=true&isWearingHat=false
    let searchParams = req.query;
    //sets the userId to null, so only show animals with null
    searchParams.userId = null;
    models.Animal.findAll({
      where: searchParams
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
  },
  //sets animal foreign key equal to user id to 'adopt' and associate
  adopt: (req, res) => {
    models.Animal.findById(req.params.id).then((animal) => {
      animal.userId = req.user.id;
      animal.save().then((result) => {
        res.json(result);
      });
    });
  }
}
