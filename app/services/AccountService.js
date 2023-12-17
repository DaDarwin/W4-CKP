import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { Todo } from '../models/Todo.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const Response = await api.get('/account')
      AppState.account = new Account(Response.data)
    } catch (err) {
      logger.error(error)
    }
  }

  async editAccount(accountData) {
    const res = await api.put('/account', accountData)
    AppState.account = new Account(res.data)
  }

  async getTodos(){
    const Response = await api.get('api/todos')
    AppState.todos = Response.data.map(todo => new Todo(todo))
    // console.log('todos',Response, AppState.todos)
  }

  async newGoal(todo){
    let Response = await api.post('api/todos', todo)
    AppState.todos.push(new Todo(Response.data))
    // console.log(Response, AppState.todos)
  }

  async markDone(id, value){
    const todo = AppState.todos.find(todo => todo.id == id)
    todo.completed = value
    AppState.emit('todos')
    const Response = await api.put(`api/todos/${id}`, todo)
    // console.log(Response)
  }

  async deleteTodo(id){
    const index = AppState.todos.findIndex(todo => todo.id == id)
    AppState.todos.splice(index, 1)
    const res = await api.delete(`api/todos/${id}`)
    // console.log(res)
  }

}

export const accountService = new AccountService()
