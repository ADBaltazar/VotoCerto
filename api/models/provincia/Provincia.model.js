import { DataTypes } from "sequelize";
import { DatabaseConection } from "../../config/Database.Conection.js";
import { MunicipioModel} from "../municipio/municipio.model.js";

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


/*
ProvinciaModel.hasMany(MunicipioModel)

MunicipioModel.belongsTo(ProvinciaModel)
*/

ProvinciaModel.hasMany(MunicipioModel,{foreignKey:'provincia_id'})

MunicipioModel.belongsTo(ProvinciaModel,{foreignKey:'provincia_id'})