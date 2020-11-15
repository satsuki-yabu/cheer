import React from 'react'
import {useSelector} from 'react-redux'
import todos from '../stores/todosSlice'

const uncompleteTodos = () => {state.todos.filter(todo => !todo.completed)}

const TodoList = () => {

  const todos = useSelector(state => state.todos)

  return (
    <>
      <ul>aaa</ul>
      <div>
        <ul>
          <li>{uncompleteTodos}</li>
          <button className='button'>完了</button>
          <button className='button'>削除</button>
        </ul>
      </div>
    </>
  )
}

export default TodoList

