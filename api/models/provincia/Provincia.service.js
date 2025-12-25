import { AppError } from "../../Error/app.Error.js";
import { RepositoryProvincia } from "./Provincia.repository.js";


export class ServiceProvincia{
    //
    constructor (repository){
        this.repository = repository
    }

    async CriarProvincia(data){  
        //REGISTRANDO A PROVINCIA CASO NÃO EXISTA
        return this.repository.create(data)
    }

    //Regra de negocia para  listar todas as provincias
    async Provincias(){
        return this.repository.findAll()
    }

    //Eliminar uma provincia
    async Eliminar(id){

        //buscar a provincia co este id  
        if(!await this.repository.findById(id)){
            throw new AppError('Id não encontrado, Verifique o ID e tente novamente.')
        }  
        
        return this.repository.deleteById(id)
    }

 
}
