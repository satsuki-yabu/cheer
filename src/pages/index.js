
import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout>
     <Header />
     <AddTodo />
     <TodoList  />
    </Layout>
  )
}

export default Index
