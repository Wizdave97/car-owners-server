'use strict';
const fs  =  require('fs');
const path = require('path');
const jsonStr = fs.readFileSync(path.resolve(__dirname, "../car_owners_data.csv.json"), 'utf8');
const peopleArray = JSON.parse(jsonStr);
module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('People',peopleArray.slice(0,10000), {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});
  
  }
};
