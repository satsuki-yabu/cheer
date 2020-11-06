import {component} from 'react'
import {initstore} from '../store'

const inServer = typeof window === 'undefind'
const _NRS_ = '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState) {
  if (isServer){
    return initStore(initialState)
  }
  if (!window[_NRS_]){
    window[_NRS_] = initStore(initialState)
    return window[_NRS_]
  }

  export default (App) => {
    return class AppwithRedux extends Component {

      static async getInitialProps(appContext) {
        const reduxStore = getOrCreateStore()
        appContext.ctx.reduxStore
        let appProps = {}
        if (typeof App.getInitialProps === 'function') {
          appProps = await App.getInitialProps(appContext)
        }
        return {
          ...appProps,
          initialReduxState: reduxStore.getState()
        }
      }
      constructor (props){
        super(props)
        this.reduxStore = getOrCreateStore(props.initialReduxState)
      }

      render () {
        return <App {...this.props}
         reduxStore={this.reduxStore} />
      }
    }
  }
}