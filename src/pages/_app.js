import React from 'react';
import App,{ Container } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store'

class _App extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps}/>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(_App)

