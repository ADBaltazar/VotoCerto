export class BaseRepository{
    constructor(model){
        this.model = model
    }

    //criar um registo
    criar(data){
        return this.model.create(data)
    }

    //lista Registos
    listarTodos(filtro){
        return this.model.findAll(filtro)
    }

    //buscar por nome
    listarPorId(where){
        return this.model.findOne({where})
    }

    //Excluir Registo
    ExcluirRegisto(where){
        return this.model.destroy({where})
    }

    //Actualizar Registo
    ActualizarRegisto(data, where){
        return this.model.update(data,{where})
    }

}