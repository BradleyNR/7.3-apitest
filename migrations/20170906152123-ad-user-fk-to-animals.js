'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Animals',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
      }
    }
  );
},

down: function (queryInterface, Sequelize) {
  queryInterface.dropColumn(
    'Animals',
    'userId'
  );
}
};
