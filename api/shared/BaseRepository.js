export class BaseRepository{
    constructor(model){
        this.model = model
    }

    //CCreate
    create(data){
        return this.model.create(data)
    }

    //findById
    findById(id){ 
        return this.model.findById(id)
    }

    //findAll
    findAll(){
        return this.model.findAll()
    }

    //Delete
    delete(id){
        return this.model.destroyById(id)
    }

    //update
    updateById(data){
        return this.model.updateById(data)
    }

}