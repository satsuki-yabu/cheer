import React, { Component } from 'react';
// import App,{ Container } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

const myApp = ({Component, pageProps }) => {
    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
export default myApp

