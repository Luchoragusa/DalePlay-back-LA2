'use strict';
const { Context } = require('express-validator/src/context');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
    }
  }
  Contact.init({
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
        validate: {
          notNull: {msg:"Email requerido"},
          isEmail: {msg:"Formato de email invalido"},
          len: {
            args: [5,100],
            msg: "El correo puede contener hasta 100 caracteres maximo"
          }
        }
    },
    reason : {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {msg:"Motivo requerido"},
          len: {
            args: [1,100],
            msg: "El motivo puede contener hasta 100 caracteres maximo"
          }
        }
    },
    message: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        len: {
          args: [5,500],
          msg: "El mensaje no es valido"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};