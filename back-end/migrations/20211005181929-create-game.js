'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('games', {
      GameID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DevID: {
        type: Sequelize.INTEGER
      },
      IFrame: {
        type: Sequelize.STRING
      },
      UploadDate: {
        type: Sequelize.DATE
      },
      GameTitle: {
        type: Sequelize.STRING
      },
      GameAvatar: {
        type: Sequelize.STRING
      },
      Category: {
        type: Sequelize.STRING
      },
      GamePlayImage: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Played: {
        type: Sequelize.INTEGER
      },
      Rate: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('games');
  }
};