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

  // async getTodos(){
  //   const Response = await api.get('api/todos')
  //   AppState.todos = new Todo(AppState.data)
  //   console.log(AppState.todos)
  // }

}

export const accountService = new AccountService()
