import React from 'react'
import {useSelector} from 'react-redux'

const uncompleteTodos = () => {state.todos.filter(todo => !todo.completed)}

const TodoList = () => {

  // useSelectorを使用。引数selectTodosで新しく作瀬されたtodoリストを、todosに代入する。
  const todos = useSelector(selectTodos)
  // map関数
  const renderdListItems = todos.map(todo => todo.id)

  return (
    <>
      <ul>{renderdListItems}</ul>
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

