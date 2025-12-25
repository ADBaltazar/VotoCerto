import { RepositoryProvincia } from '../../models/provincia/Provincia.repository.js'
import { ServiceProvincia } from '../../models/provincia/Provincia.service.js'
import { ControllerProvincia } from '../../models/provincia/Provincia.controller.js'

import express from 'express'
const Route= express.Router()

const Repository = new RepositoryProvincia()
const Service = new ServiceProvincia(Repository)
const Controller = new ControllerProvincia(Service)

//router.post('/tasks', controller.create.bind(controller))
Route.post(
    '/provincia/nova',
    Controller.CreateProvincia.bind(Controller)
)

Route.get(
    '/provincias',
    Controller.Listarprovincias.bind(Controller)
)

Route.delete(
    '/provincia/:id',
    Controller.ElimiarProvincia.bind(Controller)
)
/*
RouteProvincia.post('/provincia/nova',Controller.nova.bind(Controller))
RouteProvincia.get('/provincia/lista',Controller.ListarProvincias.bind(Controller))
RouteProvincia.put('/provincia/actualizar',Controller.ActualizarProvincia.bind(Controller))
RouteProvincia.delete('/provincia/eliminar/:id',Controller.ElimarProvincia)
*/
export{Route}