'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    species: DataTypes.STRING,
    isWearingHat: DataTypes.BOOLEAN,
    isAggressive: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });

  Animal.associate = (models) => {
    Animal.belongsTo(models.User, {foreignKey: 'userId'});
  }

  return Animal;
};
