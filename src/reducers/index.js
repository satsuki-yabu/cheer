import { combineReducers } from 'redux'
import todosReducer from '../stores/todosSlice'

export default combineReducers({
  todos: todosReducer
})
