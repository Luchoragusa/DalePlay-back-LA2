'use strict';
const { Role } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise,all([
      Role.create({
        name: 'Admin'
      }),
      Role.create({
        name: 'User'
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Roles', null, {}),
    ]);
  }
};
