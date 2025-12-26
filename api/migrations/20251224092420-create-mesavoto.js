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
    await queryInterface.createTable('mesa_voto',{
        id_mesa:{
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        numero:{
          type: Sequelize.STRING,
          allowNull:false,
          unique:true
        },
        id_assembleia:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:"assembleia",
            key:"id_assembleia",
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
          }
        },
        status: Sequelize.ENUM('ABERTA','ENCERRADA'),
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
    await queryInterface.dropTable('mesa_voto')
  }
};
