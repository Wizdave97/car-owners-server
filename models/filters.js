'use strict';
module.exports = (sequelize, DataTypes) => {
  const filters = sequelize.define('Filters', {
    start_year: DataTypes.INTEGER,
    end_year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    countries: DataTypes.ARRAY(DataTypes.STRING),
    colors: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  filters.associate = function(models) {
    // associations can be defined here
  };
  return filters;
};