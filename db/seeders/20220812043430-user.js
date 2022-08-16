'use strict';
const bcrypt=require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users',[{
        Name: "kathish",
        Email: "kathish@yopmail.com",
        Role: "admin",
        password:bcrypt.hashSync("kathish",10),
        mark_as_signin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
