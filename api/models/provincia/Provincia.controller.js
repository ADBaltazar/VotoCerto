import {ServiceProvincia} from "./Provincia.service.js";  

export class ControllerProvincia{

    constructor(service){
        this.service = service
    }

    //REGISTRAR NOVA PROVINCIA
    async CreateProvincia(req,res){ 
        const provincia = await this.service.CriarProvincia(req.body)
        return res.status(201).json(provincia)
    }

    //LISTAR TODAS AS PROVINCIAS
    async Listarprovincias(req,res){
        const provincias = await this.service.Provincias()
        return res.status(200).json(provincias)
    }

    //
    async ElimiarProvincia(req,res){
        const provincia = await this.service.Eliminar(req.query.id)
        return res .status(200).json({
            message:'Registo excluido com sucesso!',
            data:provincia
        })
    }
} 
