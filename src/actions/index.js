//import fetch from 'isomorphic-fetch'
import moment from 'moment';

export const RECEIVE_RUTER_SCHEDULE = 'RECEIVE_RUTER_SCHEDULE';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function receiveRuterSchedule(stop, departures) {
  return {
    type: RECEIVE_RUTER_SCHEDULE,
    stop,
    departures,
    receivedAt: moment()
  };
}

export function receiveWeather(weather){
  debugger;
  return {
    type: RECEIVE_WEATHER,
    weather,
    receivedAt: moment()
  };
}
