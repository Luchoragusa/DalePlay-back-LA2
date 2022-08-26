'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING(15),
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
    modelName: 'Category',
  });
  return Category;
};