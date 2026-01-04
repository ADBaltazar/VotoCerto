import {ServiceProvincia} from "./Provincia.service.js";  

export class ControllerProvincia{

    constructor(service){
        this.service = service
    }

    //REGISTRAR NOVA PROVINCIA
    async CreateProvincia(req,res){ 
        return res.status(201).json(await this.service.NovoRegisto(req.body))
    }

    //LISTAR TODAS AS PROVINCIAS
    async Listarprovincias(req,res){
        return res.status(200).json(await this.service.ListarProvincias())
    }
    
    //
    async ListarProvinciaMunicipios(req,res){
        return res.json(await this.service.ProvinciaMunicipio())
    }

    //
    async ElimiarProvincia(req,res){
        return res.status(200).json(await this.service. ExcluirProvincia(req.query.id))
    }

    //
    async ActualizarProvincia(req,res){
        return res.status(201).json(await this.service.ActualizarProvincia(req.body))
    }
} 
