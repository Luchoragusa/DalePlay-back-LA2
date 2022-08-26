'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    static associate(models) {
    }
  }
  UserGame.init({
    idGame: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'UserGame',
  });
  return UserGame;
};