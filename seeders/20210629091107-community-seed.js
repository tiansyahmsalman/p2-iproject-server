'use strict';
const fs = require('fs');
module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = JSON.parse(fs.readFileSync('./community.json', 'utf-8'))

   data.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
   });

   return queryInterface.bulkInsert('Communities', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Communities', null, {})
  }
};
