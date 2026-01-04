import { AppError } from "../../Error/app.Error.js";
import { ComunaRepository } from "./comuna.repository.js";

export class ComunaService{
    constructor(repository){
        this.repository = repository
    }

    //Criar uma nova comuna
    async RegistarNovaComuna(data){
        const ExisteComuna = await this.repository.ListarRegistoUnico(data.nome)
        if(ExisteComuna != null){
            throw new AppError('🚫 Duplicação de nome da comuna',400)
        }
        return await this.repository.NovaComuna(data)
    }

    //l
    ListarTodasComunas(){
        return this.repository.ListarComuna()
    }

    //
    async ExcluirComuna(id){
        const exliminar = await this.repository.filtrarPorId(id)

        if(!exliminar || exliminar == null){
            throw new AppError('🛑 Registo não encontrado',400)
        } 
        
        return await this.repository.EliminarComuna(id)
    }
}