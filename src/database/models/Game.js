'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
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
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        //isNumber: { msg:"La id de la categoria solo puede ser un numero." },
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        // isNumber: { msg:"El precio solo pueden ser numeros." },
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
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        len: {
          args: [1,5],
          msg: "No es una valoracion valida"
        }
      }
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