'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {
      Usergame.belongsTo(models.User, {foreignKey: 'idUser'});
      Usergame.belongsTo(models.Game, {foreignKey: 'idGame'});
    }
  }
  Usergame.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      allowNull: false
    },
    idGame: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Game',
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Usergame',
  });

  return Usergame;
};
