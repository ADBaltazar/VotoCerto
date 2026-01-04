import { BaseRepository } from "../../shared/BaseRepository.js";
import { ComunaModel } from "./comuna.model.js";


export class ComunaRepository extends BaseRepository{
    constructor(){
        super(ComunaModel)
    }

    //Criar uma nova comuna
    NovaComuna(data){
        return super.criar(data)
    }

    //
    ListarComuna(){
        return super.listarTodos({raw:true})
    }

    //
    filtrarPorId(id){  
        return super.listarPorId({id_comuna:id})
    }
    //
    ListarRegistoUnico(id){  
        return super.listarPorId({nome:id})
    }
    //
    EliminarComuna(id){
        return super.ExcluirRegisto({id_comuna:id})
    }

    //
    ActualizarComuna(data){
        return super.ActualizarRegisto(data,{id_comuna:data.id_comuna})
    }
}