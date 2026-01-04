import express from 'express'

const app = express()

import { Route } from './routes/Provincia.route.js'
import { routeComuna } from './routes/comuna.route.js'
import { AppError } from './Error/app.Error.js' 
import { RouteMunicipio } from './routes/Municipio.route.js'


//configurando leitura de ficheiro JSON
app.use(express.json())


import swagger from 'swagger-ui-express'
import swaggerDocumentation from './swagger.json' with {type:'json'}



app.use(
  '/documentation',
  swagger.serve,
  swagger.setup(swaggerDocumentation)
)


app.use(Route)
app.use(RouteMunicipio)
app.use(routeComuna)


//tratamento de Erro
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    message:err.message,
    error: 'Erro interno do servidor'
  })
})

export {app}

