'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
    }
  }
  Role.init({
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isAlpha: { msg:"El nombre solo debe contener letras" },
        len: {
          args: [3,50],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      },
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};