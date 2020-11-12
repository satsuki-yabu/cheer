import {createStore} from 'redux'
import rootReducer from './reducer'

let preloadedState
const persistedTodosString= localStrage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(rootReducer, preloadedState)

export default store
