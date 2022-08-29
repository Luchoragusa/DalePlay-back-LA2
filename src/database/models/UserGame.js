'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {
      models.User.belongsToMany(models.Game, {through: Usergame, foreignKey: 'idUser'});
      models.Game.belongsToMany(models.User, {through: Usergame, foreignKey: 'idGame'});
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
