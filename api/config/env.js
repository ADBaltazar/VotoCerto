import dotenv from 'dotenv'
dotenv.config()


export const env = {
    port : process.env.PORT,
    ip: process.env.IP,

    database:{
        host:process.env.HOST,
        name: process.env.DB_NAME,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        dialect:process.env.DB_DIALECT
    }
}