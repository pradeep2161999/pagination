'use strict';
const bcrypt=require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users',[{
        Name: "pradeep",
        Email: "pradeep@yopmail.com",
        Role: "admin",
        password:bcrypt.hashSync("pradeep",10),
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
