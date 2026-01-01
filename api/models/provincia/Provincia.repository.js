import { ProvinciaModel } from "./Provincia.model.js"
import { MunicipioModel } from "../municipio/municipio.model.js"
import { BaseRepository } from "../../shared/BaseRepository.js"
import { AppError } from "../../Error/app.Error.js"

export class RepositoryProvincia extends BaseRepository{

     constructor(){
          super(ProvinciaModel)
     }

     //criar uma provincia
     CriarProvincia(data){
          return super.criar(data)
     }

     //listar todos 
     ListarTodos(){
          return super.listarTodos()
     }

     //listar Provincia Por Id
     ListaPorId(id_provincia){
          return super.listarPorId({id_provincia})
     }

     //Eliminar Provincia
     DeleteProvincia(id){
          return super.ExcluirRegisto({id_provincia:id})
     }

     //Actualizar Registo de Provincia
     AtualizarProvincia(data){
          return super.ActualizarRegisto(data,{id_provincia:data.id_provincia}) 
     }

     //listar por Nome
     VerificarNome(nome){
          return super.listarPorId({nome})
     }
     
}