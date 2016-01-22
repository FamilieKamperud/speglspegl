import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import './debug'

const store = configureStore()

//load real departure data once from ruter API
import { getDepartures, stops } from './services/ruter'
import { receiveRuterSchedule } from './actions'
getDepartures(stops.dalenenga).then(departures => {
  store.dispatch(receiveRuterSchedule('Dælenenga', departures))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
