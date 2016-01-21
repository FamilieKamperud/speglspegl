import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import './debug'
import loadMockData from './loadMockData'

const store = configureStore()
loadMockData(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
