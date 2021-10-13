'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Game.init({
    DevID: DataTypes.INTEGER,
    IFrame: DataTypes.STRING,
    UploadDate: DataTypes.DATE,
    GameTitle: DataTypes.STRING,
    GameAvatar: DataTypes.STRING,
    Category: DataTypes.STRING,
    GamePlayImage: DataTypes.STRING,
    Description: DataTypes.STRING,
    Played: DataTypes.INTEGER,
    Rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};