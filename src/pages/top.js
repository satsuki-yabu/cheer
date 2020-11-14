import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import css from '../components/scss/top.scss'

const Top = () => {
  return (
    <>
    <Header />
    <div className={css.goTodo}>
      <h1>Todo画面にいく</h1>
    </div>
    <div className={css.goCheer}>
      <h1>応援画面にいく</h1>
    </div>
    </>
  )
}

export default Top