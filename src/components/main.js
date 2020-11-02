import React from 'react'
import css from './scss/main.scss'


const Main = () => {
  return (
    <>
      <div className={css.todo}>
        <div className={css.input_todo}>
          <h3>TODO入力</h3>
          <input type=''></input>
          <button>入力</button>
        </div>
        <div className={css.incomplete_todo}>
          <h3>やることリスト</h3>
            <ul>
              <li>あああ</li>
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



