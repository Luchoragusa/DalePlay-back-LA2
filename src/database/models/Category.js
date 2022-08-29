'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Game, {foreignKey: 'idCategory'});
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        isAlpha: { msg:"El nombre solo debe contener letras" },
        len: {
          args: [4,25],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      },
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};