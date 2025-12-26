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
      await queryInterface.createTable('assembleia',{
        id_assembleia:{
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        nome:{
          type: Sequelize.STRING,
          allowNull:false,
          unique:true
        },
        id_comuna:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:"comuna",
            key:"id_comuna",
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
          }
        },
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
    await queryInterface.dropTable('assembleia')
  }
};
