
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import css from './scss/main.scss'


const Main = () => {

  // 入力結果を受け取る
  const [todo, setTodo] = useState('')

  const [incompleteTodo, setIncompleteTodo] = useState(['ううう','eee'])

  const onChangeAddTodo = (event) => setTodo(event.target.value);

  const addTodo = () => {
    const newTodoList = [...incompleteTodo, todo];
    setIncompleteTodo(newTodoList);
  }
  
  return (
    <>
      <div className={css.todo}>
        <div className={css.input_todo}>
          <h3>TODO入力</h3>
          <input type='text' value={todo} onChange={onChangeAddTodo}></input>
          <button onClick={addTodo}>入力</button>
        </div>
        <div className={css.incomplete_todo}>
          <h3>やることリスト</h3>
            <ul>
             {incompleteTodo.map((todo)=>{
               return (
                 <div key={todo} className='incomplete_todo_list'>
                   <li>{todo}</li>
                 </div>
               )
             })}
            </ul>
        </div>
        <div className={css.complete_todo}>
          <h3>完了リスト</h3>
            <ul>
              <li>いいい</li>
            </ul>
        </div>
      </div>
    </>
  )
}
export default Main



