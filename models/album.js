'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};