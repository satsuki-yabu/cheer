import React from 'react'
import css from './scss/header.scss'


const Header = () => {
  return (
    <>
      <div className={css.nav_bar}>
        <div className={css.nav_top}>
          <h1>Top</h1>
        </div>
      </div>
    </>
  )
}

export default Header