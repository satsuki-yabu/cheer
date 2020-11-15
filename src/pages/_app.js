import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../stores/index.js';


const myApp = ({Component, pageProps }) => {
    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
export default myApp

