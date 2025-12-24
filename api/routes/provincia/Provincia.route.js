import {ControllerProvincia} from "../../models/provincia/Provincia.controller.js";
import express from 'express'
const RouteProvincia = express.Router()

const Controller = new ControllerProvincia()

RouteProvincia.post('/provincia/nova',Controller.nova)
RouteProvincia.get('/provincia/lista',Controller.ListarProvincias)
RouteProvincia.put('/provincia/actualizar',Controller.ActualizarProvincia)
RouteProvincia.delete('/provincia/eliminar/:id',Controller.ElimarProvincia)

export{RouteProvincia}