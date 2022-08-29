'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    static associate(models) {
      Developer.hasMany(models.Game, {foreignKey: 'idDeveloper'});
    }
  }
  Developer.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: {
          args: [2,25],
          msg: "El nombre debe contener entre 2 a 50 letras"
        }
      }
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        len: {
          args: [10,200],
          msg: "El link no es valido"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};