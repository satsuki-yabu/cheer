import React,{useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

// import { useDispatch } from "@reduxjs/toolkit";




const addTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  onClickAdd = (event) => setText(event.target.value)
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



