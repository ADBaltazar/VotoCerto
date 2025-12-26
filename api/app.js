import express from 'express'

const app = express()

import { Route } from './routes/provincia/Provincia.route.js'
import { AppError } from './Error/app.Error.js' 


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


//tratamento de Erro
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    error: 'Erro interno do servidor'
  })
})

export {app}

