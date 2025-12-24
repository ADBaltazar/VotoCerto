import {Sequelize} from 'sequelize'
import {env} from './env.js'


//Conecting Database

export const DatabaseConection = new Sequelize(
    env.database.name,
    env.database.user,
    env.database.password,
    {
        host:env.database.host,
        dialect:env.database.dialect,
        logging:false
    }
)