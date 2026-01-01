import { MunicipioService} from "./municipio.service.js";

export class MunicipioController{
    constructor(service){
        this.service = service
    }

    async novomunicipio (req,res){
        const novo = await this.service.createmunicipio(req.body)
        return res.json(novo)
    }

    async listarmunicipios(req,res){
        return res.json(await this.service.listMunicipios())
    }

    async excluirmunicipio(req,res){
        return res.status(201).json(await this.service.deleteMunicipio(req.query.id))
    }


}