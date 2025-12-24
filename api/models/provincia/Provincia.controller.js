import {ServiceProvincia} from "./Provincia.service.js";  
const Service = new ServiceProvincia()

export class ControllerProvincia{

    //REGISTRAR NOVA PROVINCIA
    async nova(req,res){ 
        return res.status(201).json(await Service.CriarProvincia(req.body))
    }

    //LISTAR TODAS AS PROVINCIAS
    async ListarProvincias(req,res){
        return res.status(200).json(await Service.ListaProvincia())
    }

    async ActualizarProvincia(req,res){
        return res.status(200).json(await Service.actualizar(req.body))
    }

    //HTTP PARA ELIMNAR UMA PROVINCIA
    async ElimarProvincia(req,res){

        const provincia = await Service.ElimarProvincia(req.params.id)
        return res.status(200).json({message:'Dados Excluido com sucesso!',data:provincia})

    }

} 
