import {createStore} from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer, dispatch)

export default store
