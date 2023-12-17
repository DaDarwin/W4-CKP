import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";
import { getFormData } from '../utils/FormHandler.js';
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTodos(){
  let content = ''
  AppState.todos.forEach(todo => content += todo.template)
  setHTML('todoList', content)
  setText('todoNum', `${AppState.todos.filter(todo => todo.completed == false).length} Todo's Left`)
}
export class AccountController {
  constructor() {
    accountService.getAccount()
    AppState.on('user', this.getTodos)
    AppState.on('todos', _drawTodos)
    if(AppState.user){
      document.getElementById('todos').classList.remove('d-none')
    }
    this.getTodos()
  }

  async getTodos(){
    document.getElementById('todos').classList.remove('d-none')
    try {
      await accountService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  async newGoal(){
    try{
      event.preventDefault()
      const newTodo = getFormData(event.target)
      // console.log(newTodo)
      accountService.newGoal(newTodo)
      event.target.reset()}
    catch(error){
      console.error(error);
    }
  }

  async sendTodos(){
    try {
      await accountService.sendTodos()
    } catch (error) {
      console.error(error)
    }
  }

  async markDone(id, value){
    try {
      const value = document.getElementById(id).firstElementChild.checked
      accountService.markDone(id, value)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteTodo(id){
    const res = await Pop.confirm('Are you sure you want to delete this Todo', 'It will be gone forever', "Yes, I'm Sure", "warning")
    if(res){
      try {
        accountService.deleteTodo(id)
      } 
      catch (error) {
      console.error(error)
      }
    }
  }

}