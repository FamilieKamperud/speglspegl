import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './debug'

import App from './components/App'
import configureStore from './store/configureStore'
import { fetchBusDepartures } from './services/ruter'

const store = configureStore()

fetchBusDepartures(store.dispatch)
setInterval(()=>{
  fetchBusDepartures(store.dispatch)
}, 10000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
