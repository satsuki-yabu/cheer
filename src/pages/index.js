import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
// テスト用にtestブランチで変更してみる

const Index = () => {
	return (
		<Layout>
			<Header />
			<AddTodo />
			<TodoList />
		</Layout>
	);
};

export default Index;
