import { MunicipioService} from "./municipio.service.js";

export class MunicipioController{
    constructor(service){
        this.service = service
    }

    async novomunicipio (req,res){
        return res.json(await this.service.NovoMunicipio(req.body))
    }

    async listarmunicipios(req,res){
        return res.json(await this.service.listarTodosMunicipios())
    }

    async excluirmunicipio(req,res){
        return res.status(201).json(await this.service.EliminarMunicipio(req.query.id))
    }

    async ActualizarMunicipio(req,res){
        const dadoactualizado = await this.service.ActualizarMunicipio(req.body)
        return res.status(201).json(dadoactualizado)
    }


}