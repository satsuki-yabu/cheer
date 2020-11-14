const initialState =  {
  todos: []
}

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)
  return maxId + 1
} 

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'todo/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload
          }
        ]
      }
    }

    case 'todo/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    default:
    return state
  }

}

export default appReducer

