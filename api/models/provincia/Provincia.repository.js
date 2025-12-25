import { ProvinciaModel } from "./Provincia.model.js"
import { BaseRepository } from "../../shared/BaseRepository.js"

export class RepositoryProvincia extends BaseRepository{

     constructor(){
          super(ProvinciaModel)
     }

     //create
     create(data){
          return this.model.create(data)
     }
     
     //LSITAR TODAS AS PROVINCIAS
     findAll(){
          return this.model.findAll()
     }

     //
     findById(id){
          return this.model.findByPk(id)
     }

     //
     update(data){
          return this.model.update(data)
     }

     //elimiar uma provincia
     deleteById(id){
          return this.model.destroy({where:{id_provincia:id}})
     }

}