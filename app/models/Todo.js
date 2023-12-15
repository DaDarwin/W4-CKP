




export class Todo{

    constructor(data){
        this.description = data.description
        this.completed = data.completed || false
    }
}