'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {

      //Game.hasMany(models.Usergame, {foreignKey: 'idGame'});
      Game.belongsToMany(models.User, {through: 'Usergame', foreignKey: 'idGame'});

      Game.belongsTo(models.Developer, {foreignKey: 'idDeveloper'});
      Game.belongsTo(models.Category, {foreignKey: 'idCategory'});
    }
  }
  Game.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: {
          args: [3,25],
          msg: "El nombre debe contener entre 3 a 50 letras"
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
    valoration: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idDeveloper: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        len: {
          args: [10,500],
          msg: "No es una descripcion valida"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};