import { BaseRepository } from "../../shared/BaseRepository.js";
import { MunicipioModel} from "./municipio.model.js";

export class MunicipioRepository extends BaseRepository{
    constructor(){
       super(MunicipioModel)
    }

    //chamando a create da baserepository
    create(data){
        return this.model.create(data)
    }

    findAll(){
        return this.model.findAll({raw:true})
    }

    async DeleteByMunicipio(id){
        console.log("cheguei aqui")
        console.log("id Capturado: ",id)
        return await this.model.destroyById({where:{id_municipio:id}})
    }
}