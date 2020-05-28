'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Filters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_year: {
        type: Sequelize.INTEGER
      },
      end_year: {
        type: Sequelize.INTEGER
      },
      gender: {
        allowNull:true,
        type: Sequelize.STRING
      },
      countries: {
        allowNull:true,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      colors: {
        allowNull:true,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Filters');
  }
};