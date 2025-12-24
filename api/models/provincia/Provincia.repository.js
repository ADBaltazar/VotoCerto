import { ProvinciaModel } from "./Provincia.model.js"

export class RepositoryProvincia{

    /**
     * 
     * Esta camada será a resonsavel por conversar com o banco de dados
     * por meio de consultas - CRUD
     * 
     */

    //criar nova provincia
   async create(data){
        return await ProvinciaModel.create(data)
   }

   //LSITAR TODAS AS PROVINCIAS
   async findAll(){
        return await ProvinciaModel.findAll({raw:true})
   }

   //buscar provincia pelo nome
   async findByName(nome){
        return await ProvinciaModel.findOne({where:{nome:nome}})
   }

   //buscar provincia pelo seu Id
   async findByPk(id){
        return await ProvinciaModel.findByPk(id)
   }

   //Eliminar provincia pelo seu ID
   async destroyByPk(id){
        return await ProvinciaModel.destroy({where:{id_provincia:id}})
   }

   //actualizar o nome de uma provincia
   async update(data){
        return await ProvinciaModel.update(data,{where:{id_provincia:data.id_provincia}})
   }


}