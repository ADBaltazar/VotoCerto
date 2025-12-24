import {app} from './app.js'
import { authenticationdb } from './database/database.js'
import { env } from './config/env.js'



//creating the server 

async function server(){
    //get the database conection
    await authenticationdb()

    //listen the server
    app.listen(env.port,env.ip,()=>{console.log(`🚀 Server is running on http://${env.database.host}:${env.port}`)})
}

server() 