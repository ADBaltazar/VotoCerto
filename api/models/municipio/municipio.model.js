import { DataTypes } from "sequelize";
import { DatabaseConection } from "../../config/Database.Conection.js";  
//criando a model municipio para mapear a nossa migration

export const MunicipioModel =  DatabaseConection.define('municipio',{
    id_municipio:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },   
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'provincia', // nome da tabela (NÃO do model)
          key: 'id_provincia'
        }
       }
    },
    {
        tableName:"municipio",
        timestamps:true,
        underscored:true

    }
)
