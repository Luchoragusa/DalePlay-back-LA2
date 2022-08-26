'use strict';
const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise,all([
      User.create({
        name: 'Admin',
        surname: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        idRole: 1
      }),
      User.create({
        name: 'user',
        surname: 'user',
        email: 'user@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        idRole: 2
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Users', null, {}),
    ]);
  }
};
