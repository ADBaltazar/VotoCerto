'use strict';

/** @type {import('sequelize-cli').Migration} */

  export async function up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('eleitor',{
        id_eleitor:{
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        nome_completo:{ 
          type:Sequelize.STRING,
          allowNull:false,
        },
        numero_bilhete:{
          type: Sequelize.CHAR(14),
          allowNull:false,
          unique:true
        },
        data_nascimento:{
          type: Sequelize.DATEONLY
        },
        genero:{
          type:Sequelize.ENUM('Masculino','Feminino')
        },
        biometria_hash:{ 
          type:Sequelize.STRING,
          unique:true,
          allowNull:true
        },
        status: {
          type:Sequelize.ENUM('ATIVO','INATIVO','VOTOU'), 
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
  }

  export async function down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('eleitor')
  }

