import React,{useState} from 'react'
// ここからデータを送信するので、dispatch機能が必要
import {dispatch} from 'react-redux'

const addTodo = () => {
  // 配列準備
  const [text, setText] = useState('')
  // actionを運ぶ機能dispatch
  const dispatch = useDispatch()

  onClickAdd = (event) => setText(event.target.value)
  
  // keydownとtrimmedText
  onClickKeyDown = (event) => {
    const trimmedText = event.target.value.trim()

    if(event.which === 13 && trimmedText) {
      dispatch({type: 'todos/todoAdded', payload: trimmedText })
      setText('')
    }
  }
  return (
    <>
      <input 
      type='text'
      placeholder='Todoを入力してください'
      onChange={onClickAdd}
      onKeyDown={onClickKeyDown}
      />
    </>
  )
}

export default addTodo



