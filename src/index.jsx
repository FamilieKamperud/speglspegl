import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './debug';

import App from './components/App';
import configureStore from './store/configureStore';
import { fetchBusDepartures } from './services/ruter';
import { fetchWeatherInfo } from './services/yr';

const store = configureStore();

fetchBusDepartures(store.dispatch);
setInterval(()=>{
  fetchBusDepartures(store.dispatch);
}, 10000);
fetchWeatherInfo(store.dispatch);
setInterval(()=>{
  fetchWeatherInfo(store.dispatch);
}, 3600000);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
