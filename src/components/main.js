
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import css from './scss/main.scss'


const Main = () => {

  const [todo, setTodo] = useState('')
  
  const [incompleteTodo, setIncompleteTodo] = useState(['ううう','eee'])
  
  const [completeTodo, setCompleteTodo] = useState(['www'])

  const onChangeAddTodo = (event) => setTodo(event.target.value);

  const removeTodoFromIncomplete = (index) => {
    const newTodoList = [...incompleteTodo]
    newTodoList.splice(index,1);
    setIncompleteTodo(newTodoList);
  }
  
  const onClickAdd = () => {
    const newTodoList = [...incompleteTodo, todo];
    setIncompleteTodo(newTodoList);
  }

  const onClickDelete = (index) => {
    return removeTodoFromIncomplete(index);
    // const newTodoList = [...incompleteTodo]
    // newTodoList.splice(index,1);
    // setIncompleteTodo(newTodoList);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodoList = [...incompleteTodo]
    newIncompleteTodoList.splice(index,1);
    setIncompleteTodo(newIncompleteTodoList);

    const newcompleteTodoList = [...completeTodo,incompleteTodo[index]]
    setCompleteTodo(newcompleteTodoList);
  }

  const onClickBack = (index) => {
    const newCompleteTodoList = [...completeTodo]
    newCompleteTodoList.splice(index,1);
    setCompleteTodo(newCompleteTodoList);

    const newIncompleteTodoList = [...incompleteTodo,completeTodo[index]]
    setIncompleteTodo(newIncompleteTodoList);
  }
  
  return (
    <>
      <div className={css.todo}>
        <div className={css.input_todo}>
          <h3>TODO入力</h3>
          <input type='text' value={todo} onChange={onChangeAddTodo} ></input>
          <button onClick={onClickAdd}>入力</button>
        </div>
        <div className={css.incomplete_todo}>
          <h3>やることリスト</h3>
            <ul>
             {incompleteTodo.map((todo,index)=>{
               return (
                 <div key={todo} className='incomplete_todo_list'>
                   <li>{todo}</li>
                   <button onClick={()=>onClickComplete(index)}>完了</button>
                   <button onClick={()=>onClickDelete(index)}>削除</button>
                 </div>
               )
             })}
            </ul>
        </div>
        <div className={css.complete_todo}>
          <h3>完了リスト</h3>
          <ul>
            {completeTodo.map((todo,index)=>{
              return (
              <div key={todo} className='complete_todo_list'>
              <li>{todo}</li>
              <button onClick={()=>onClickBack(index)}>戻す</button>
              </div>
            )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Main



