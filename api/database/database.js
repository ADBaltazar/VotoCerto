import { DatabaseConection } from "../config/Database.Conection.js";

//looking for authentication
export function authenticationdb(){
    try{
        DatabaseConection.authenticate()
        console.log('✅ Database conected Successfuly!')
    }catch(error){
        console.log(error.message)
        console.log('❌ Database Conection Failed')
        process.exit(1)
    }
}