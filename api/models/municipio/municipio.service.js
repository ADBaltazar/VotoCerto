import { MunicipioRepository } from "./municipio.repository.js";
import { AppError } from "../../Error/app.Error.js";

export class MunicipioService{
    constructor(municipioRepository){
        this.municipioRepository = municipioRepository
    }

    //criar um novo Municipio
    async NovoMunicipio(data){
        //Verificar se os Municipio já se encontra Reistrada
        const nome = data.nome
        const MunicipioExiste = await this.municipioRepository.listarPorId({nome:data.nome})

        if(MunicipioExiste != null){ 
            throw new AppError('🚫 Nome Duplicado! Nome do municipio já se encontra registrada.')            
        }

        return this.municipioRepository.CriarMunicipio(data)
        
    }

    async ActualizarMunicipio(data){
        //Verificar se os Municipio já se encontra Reistrada
        const MunicipioExiste = await this.municipioRepository.listarPorId({id_municipio:data.id_municipio})

        if(MunicipioExiste == null){ 
            throw new AppError('🚫 Registo não encontrado')            
        }
        
        return this.municipioRepository.Actualizar(data)
    }

    //listar os municipios
    listarTodosMunicipios(){
        return this.municipioRepository.ListarMunicipio()
    }

    //
    async EliminarMunicipio(id){

        const VerificarNome = await this.municipioRepository.ListarMunicipioID(id)

        if(!VerificarNome){
            throw new AppError('🚫 Registo não encontrado!',400)
        } 

        await this.municipioRepository.ExcluirMunicipio(id)

        return VerificarNome
    
    }

}