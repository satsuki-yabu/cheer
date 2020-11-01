import React from 'react'
import css from './scss/main.scss'

const Main = () => {
  return (
    <>
      <div className={css.title}>今日１日をふりかえってみましょう</div>
        <div className={css.daywork}>
          <button>頑張った！</button>
          <button>そこそこ頑張ったかな〜</button>
          <button>うう、頑張ってないかも...</button>
          <button>だめだ〜！なんもできてない！</button>
        </div>
    </>
  )
}
export default Main



