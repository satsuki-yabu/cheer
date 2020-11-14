import React from 'react'
import {useSelector} from 'react-redux'


const TodoList = () => {

  // useSelectorを使用。引数selectTodosで新しく作瀬されたtodoリストを、todosに代入する。
  const todos = useSelector(selectTodos)
  // map関数
  const renderdListItems = todos.map()

  return (
    <>
      <ul>ListItems</ul>
    </>
  )
}

export default TodoList
