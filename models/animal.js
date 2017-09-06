'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    species: DataTypes.STRING,
    isWearingHat: DataTypes.BOOLEAN,
    isAggressive: DataTypes.BOOLEAN,
    name: DataTypes.STRING
  });
  return Animal;
};
