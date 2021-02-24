import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Header from '../components/header';
import css from '../components/scss/top.scss';

const Top = () => {
	return (
		<>
			<Header />
			<div className={css.goTodo}>
				<h1>テストします</h1>
			</div>
			<div className={css.goCheer}>
				<h1>テストします</h1>
			</div>
		</>
	);
};

export default Top;
