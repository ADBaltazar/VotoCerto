'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('partido',{
        id_partido:{
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        nome:{
          type: Sequelize.STRING,
          allowNull:false,
          unique:true
        },
        sigla:{
          type: Sequelize.STRING,
          allowNull:true,
          unique:true
        },
        ordem_lista:{
          type: Sequelize.INTEGER,
          allowNull:true,
          unique:true
        },
        foto:{
          type: Sequelize.STRING,
          allowNull:true
        },
        cabeca_lista: Sequelize.BOOLEAN ,
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('partido')
  }
};
