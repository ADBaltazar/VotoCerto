import { DataTypes } from "sequelize";
import { DatabaseConection } from "../../config/Database.Conection.js";

//create the model provincia
export const ProvinciaModel = DatabaseConection.define('provincia',{
        id_provincia:{
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        nome:{
          type: DataTypes.STRING,
          allowNull:false,
          unique:true
        }
},
{
    tableName:'provincia',
    timestamps:true,
    underscored:true
})