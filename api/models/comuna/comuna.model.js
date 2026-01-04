import { DataTypes } from "sequelize";
import { DatabaseConection } from "../../config/Database.Conection.js";  
//criando a model municipio para mapear a nossa migration

export const ComunaModel =  DatabaseConection.define('comuna',{
    id_comuna:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },   
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'municipio', // nome da tabela (NÃO do model)
          key: 'id_municipio'
        }
       }
    },
    {
        tableName:"comuna",
        timestamps:true,
        underscored:true

    }
)
