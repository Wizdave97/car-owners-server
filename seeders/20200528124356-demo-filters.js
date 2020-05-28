'use strict';
const fs  =  require('fs');
const path = require('path')
const jsonStr = fs.readFileSync(path.resolve(__dirname, "../filter.json"), 'utf8');
const filtersArray = JSON.parse(jsonStr);
filtersArray.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Filters', filtersArray, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Filters', null, {});
   
  }
};
