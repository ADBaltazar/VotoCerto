import { env } from "./env.js"

export default {
  development: {
    username: env.database.user,
    password: env.database.password,
    database: env.database.name,
    host: env.database.host,
    dialect: env.database.dialect
  },
  test:{
    username:env.database.user,
    password:env.database.password,
    database:env.database.name,
    host:env.database.host,
    dialect: env.database.dialect
  },
  prodution:{
    username:env.database.user,
    password:env.database.password,
    database:env.database.name,
    host:env.database.host,
    dialect: env.database.dialect
  }
}
