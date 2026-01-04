import express from 'express'
const routeComuna = express.Router()


import { ComunaModel } from "../models/comuna/comuna.model.js";
import { ComunaRepository } from "../models/comuna/comuna.repository.js";
import { ComunaService} from "../models/comuna/comuna.service.js";
import { ComunaController } from "../models/comuna/comuna.controller.js";


//crinado as instancias
const model = new ComunaModel()
const repository = new ComunaRepository(model)
const Service = new ComunaService(repository)
const controler = new ComunaController(Service)

//
routeComuna.post(
    '/comuna/nova',
    controler.NovoRegisto.bind(controler)
)

//
routeComuna.get(
    '/comuna/lista',
    controler.ListarComuna.bind(controler)
)

//
routeComuna.delete(
    '/comuna/delete',
    controler.ExcluirComuna.bind(controler)
)

export{routeComuna}


