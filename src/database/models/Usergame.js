'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Usergame extends Model {
    static associate(models) {
      // Como creo que deberia ser
      //Usergame.belongsToMany(models.Game, {through: 'Game', foreignKey: 'idUser'});
      //Usergame.belongsToMany(models.User, {through: 'User', foreignKey: 'idGame'});

      // Como me funciona
      // models.User.belongsToMany(models.Game, {through: Usergame, foreignKey: 'idUser'});
      // models.Game.belongsToMany(models.User, {through: Usergame, foreignKey: 'idGame'});

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