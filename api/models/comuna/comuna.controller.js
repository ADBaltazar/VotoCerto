import { ComunaService } from "./comuna.service.js";


export class ComunaController{
    constructor(Service){
        this.Service = Service
    }

    //
    async NovoRegisto(req,res){
        return res.json(await this.Service.RegistarNovaComuna(req.body))
    }

    //
    async ListarComuna(req,res){
        //return res.json(await this.service.ListarTodasComunas())
        return res.status(200).json(await this.Service.ListarTodasComunas())
    }

    //
    async ExcluirComuna(req,res){
        return res.status(200).json(await this.Service.ExcluirComuna(req.query.id))
    }
}