import express from 'express'
const RouteMunicipio = express.Router()


//importando todos os fraquimentos
import { MunicipioRepository } from '../models/municipio/municipio.repository.js'
import { MunicipioService } from '../models/municipio/municipio.service.js'
import { MunicipioController } from '../models/municipio/municipio.controller.js'


//criar as instancia de cadata componente


const repository = new MunicipioRepository()
const service  = new MunicipioService(repository)
const controller = new MunicipioController(service)

RouteMunicipio.post(
    '/municipio',
    controller.novomunicipio.bind(controller)
)

RouteMunicipio.get(
    '/municipios/lista',
    controller.listarmunicipios.bind(controller)
)

RouteMunicipio.delete(
    '/municipio/delete/id',
    controller.excluirmunicipio.bind(controller)
)

RouteMunicipio.put(
    '/municipio/actualizar',
    controller.ActualizarMunicipio.bind(controller)
)

export {RouteMunicipio}