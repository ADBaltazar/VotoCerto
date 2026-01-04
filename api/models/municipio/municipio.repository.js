import { raw } from "express";
import { BaseRepository } from "../../shared/BaseRepository.js";
import { MunicipioModel} from "./municipio.model.js";

export class MunicipioRepository extends BaseRepository{
    constructor(){
       super(MunicipioModel)
    }

    //Registrar novo Municipio
    CriarMunicipio(data){
        return this.criar(data)
    }

    //Listar todos Municipios
    ListarMunicipio(){
        return super.listarTodos({raw:true})
    }

    //
    ListarMunicipioID(id){
        return super.listarPorId({id_municipio:id})
    }

    //
    Actualizar(data){
        return super.ActualizarRegisto(data,{id_municipio:data.id_municipio})
    }

    //
    ExcluirMunicipio(id){
        return super.ExcluirRegisto({id_municipio:id})
    }


}