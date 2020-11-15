import React from 'react'
import {createSlice} from '@reduxjs/toolkit';

const initialState =  {
  name: '',
  todos: []
}

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)
  return maxId + 1
} 

const todos = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    setTodoAdd: (state, action) => {
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
  }
})

export default todos


