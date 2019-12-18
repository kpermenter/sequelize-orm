'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    artist.hasMany(models.album, {
      as: 'album',
      foreignKey: 'artist_id'
    })
    // associations can be defined here
  };
  return artist;
};