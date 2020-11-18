import {useDispatch} from 'react-redux'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../stores/todosSlice'

const mapDispatch = {addTodo}

const AddTodo = ({addTodo}) => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setText(e.target.value)
    }

  return (
    <>
        <input type='text' value={text} onChange={handleInputChange} placeholder='Todoを入力してください'/>
        <button type='submit'>入力</button>
    </>
  )
}

export default connect(null, mapDispatch)(AddTodo)



