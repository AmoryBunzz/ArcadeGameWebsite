'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      UserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Role: {
        type: Sequelize.BOOLEAN
      },
      Name: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.BOOLEAN
      },
      DayOfBirth: {
        type: Sequelize.DATE
      },
      Avatar: {
        type: Sequelize.STRING
      },
      Friends: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};