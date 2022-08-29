'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {
    }
  }
  Usergame.init({
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idGame: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Usergame',
  });

  return Usergame;
};
