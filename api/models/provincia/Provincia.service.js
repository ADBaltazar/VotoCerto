import { AppError } from "../../Error/app.Error.js";
import { RepositoryProvincia } from "./Provincia.repository.js";


export class ServiceProvincia{
    //
    constructor (repository){
        this.repository = new RepositoryProvincia()
    }

    async CriarProvincia(data){

        //BUSCANDO NOS REGISTO PROVINCIA COM ESTE NOME
        const findByname = await this.repository.findByName(data.nome)

        //VERIFICANDO O TERNO
        if(findByname && findByname!=null){
           throw new AppError('Nome Duplicado, Está provincia já está registrada!',400)
        } 

        //REGISTRANDO A PROVINCIA CASO NÃO EXISTA
        return this.repository.create(data)
    }

    //Regra de negocia para  listar todas as provincias
    async ListaProvincia(){
        return this.repository.findAll()
    }

    //actualizar os dadoa de uma Provincia
    async actualizar(data){

        if(!await this.repository.findByPk(data.id_provincia)){
            throw new AppError('ID da provincia é invalido, Verique o ID e tente novamente')
        }else if(await this.repository.findByName(data.nome)){
            throw new AppError('Nome duplicado, Este nome já existe')
        }

        return this.repository.update(data)
    }

    //Regra de negocia para Elimar uma provincia pelo seu Id
    async ElimarProvincia(id){
        
        if(!await this.repository.findByPk(id)){
            throw new AppError('ID da provincia é invalido, Verique o ID e tente novamente')
        } 
        return this.repository.destroyByPk(id)
    }
}
