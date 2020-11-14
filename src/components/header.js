import React from 'react'
import css from './scss/header.scss'
import Link from 'next/link'


const Header = () => {
  return (
    <>
      <div className={css.nav_bar}>
        <div className={css.nav_top}>
          <Link href={'/'}>
          <a>Top</a>
          </Link>
        </div>
        <div className={css.other_nav_top}>
          <Link href={'/top'}>
             <a>リンク</a>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Header