import { where } from "sequelize";
import { AppError } from "../../Error/app.Error.js";
import { RepositoryProvincia } from "./Provincia.repository.js";


export class ServiceProvincia{
    //
    constructor (repository){
        this.repository = repository
    }

    //criar uma nova provinciar
    async NovoRegisto(data){
        
        const existe = await this.repository.VerificarNome(data.nome)
        if(existe && existe != null){
            throw new AppError('Provincia Duplicada!',400)
        }

        return await this.repository.CriarProvincia(data)
    }

    //Listar todas a provincias
    async ListarProvincias(){
        return this.repository. ListarTodos()
    }

    //Excluir uma Provincia
    async ExcluirProvincia(id){

        const VerificarProvincia = await this.repository.ListaPorId(id)
        if(!VerificarProvincia || VerificarProvincia == null){
            throw new AppError('Registo de Provincia não encontrado!',400)
        } 

        return this.repository.DeleteProvincia(id)

    }

    async ActualizarProvincia(data){ 
        
        const VerificarProvincia = await this.repository.ListaPorId(data.id_provincia)
        if(!VerificarProvincia || VerificarProvincia == null){
            throw new AppError('Registo de Provincia não encontrado!',400)
        } 

        return this.repository.AtualizarProvincia(data)
    }

 
}
