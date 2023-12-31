import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account =null

  image = null

  quote = null

  todos = []

  weather = null

  time = null

  pref = {
    tempFah : false,
    time12 : false
  }
}

export const AppState = createObservableProxy(new ObservableAppState())