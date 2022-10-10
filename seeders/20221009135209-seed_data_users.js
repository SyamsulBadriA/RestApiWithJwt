'use strict';

const { hashPassword } = require("../helper/bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     const hashedPassword = hashPassword("123456");


     await queryInterface.bulkInsert('Users', [{
        username: 'sasuke12',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),

     },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
