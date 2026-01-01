import { MunicipioRepository } from "./municipio.repository.js";

export class MunicipioService{
    constructor(municipioRepository){
        this.municipioRepository = municipioRepository
    }

    //criar um novo Municipio
    createmunicipio(data){
        //const verificarNome = this.municipioRepository.findOne(data.nome)

       // console.log(verificarNome)

        return this.municipioRepository.create(data)
    }

    //listar os municipios
    listMunicipios(){
        return this.municipioRepository.findAll()
    }

    //
    async deleteMunicipio(id){
        const MunicipioExiste = await this.municipioRepository.DeleteByMunicipio(id)
        return MunicipioExiste
    }

}