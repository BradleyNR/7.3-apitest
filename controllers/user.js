const models = require('../models');

module.exports = {
  detail: (req, res) => {
    if (req.user) {
      message = req.user.username;
    } else {
      message = "you did it!";
    }
    res.json({message: message});
  },
  create: (req, res) => {
    models.User.create({
      username: req.body.username,
      password: req.body.password
    }).then((user) => {
      res.json(user);
    });
  }
};
