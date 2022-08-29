'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {
      Usergame.belongsTo(models.Game, {foreignKey: 'idGame'});
      Usergame.belongsTo(models.User, {foreignKey: 'idUser'});
    }
  }
  Usergame.init({

  }, {
    sequelize,
    modelName: 'Usergame',
  });

  return Usergame;
};
