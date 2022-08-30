'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {

      Usergame.belongsToMany(models.Game, {through: 'Game', foreignKey: 'idUser'});
      Usergame.belongsToMany(models.User, {through: 'User', foreignKey: 'idGame'});

    }
  }
  Usergame.init({
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    idGame: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Game',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Usergame',
  });

  return Usergame;
};
