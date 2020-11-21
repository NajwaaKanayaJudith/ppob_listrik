'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pelanggan', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelanggan : {
        type: Sequelize.INTEGER
      },
      username : {
        type: Sequelize.STRING
      },
      password : {
        type: Sequelize.STRING
      },
      nomor_kwh : {
        type: Sequelize.STRING
      },
      nama_pelanggan : {
        type: Sequelize.STRING
      },
      alamat : {
        type: Sequelize.STRING
      },
      id_tarif : {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "tarif",
          key : "id_tarif"
        }
      },
      createdAt : {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt : {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down : async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pelanggan');
  }
};