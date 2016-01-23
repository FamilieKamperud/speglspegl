import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import './debug'

const store = configureStore()

//TODO: move elsewhwere
//load real departure data once from ruter API
import { getDepartures, stops } from './services/ruter'
import { receiveRuterSchedule } from './actions'

const fetchDepartures = () => {
  getDepartures(stops.dalenenga).then(departures => {
    store.dispatch(receiveRuterSchedule('Dælenenga', departures))
  })
}
fetchDepartures()
setInterval(fetchDepartures, 10000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
