




export class Todo{

    constructor(data){
        this.id = data.id
        this.description = data.description
        this.completed = data.completed || false
    }


    get template(){
        return `
        <div id="${this.id}" class="todo m-2 p-3 border border-1 rounded  ${this.completed? 'border-done' : 'border-light'} ${this.completed? 'text-done' : 'text-light'} d-flex justify-content-between align-items-center">
            <input oninput="app.AccountController.markDone('${this.id}')" type="checkbox" ${this.completed? 'checked' : '' } class="form-check-input m-0 bg-transparent" title="Mark-Done">
            <h3 class="lh-1 m-1">${this.description}</h3>
            <button onclick="app.AccountController.deleteTodo('${this.id}')" class="btn btn-outline-danger lh-1" title="Delete Todo"><i class="mdi mdi-delete"></i></button>
        </div>`
    }
}