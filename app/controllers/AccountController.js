import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";


export class AccountController {
  constructor() {
    accountService.getAccount()
    // AppState.on('user', this.getTodos)
    // this.getTodos()
  }

  // async getTodos(){
  //   try {
  //     await accountService.getTodos()
  //   } catch (error) {
  //     console.error(error)
      
  //   }
  // }

}
