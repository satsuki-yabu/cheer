
import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import addTodo from '../components/addTodo'
import TodoList from '../components/TodoList'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout>
     <Header />
     <addTodo />
     <TodoList  />
    </Layout>
  )
}

export default Index
