import React from 'react';
import App,{ Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/redux-store';

class _App extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps}/>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(_App)


// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState)

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }