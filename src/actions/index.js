//import fetch from 'isomorphic-fetch'
import moment from 'moment'

export const RECEIVE_RUTER_SCHEDULE = 'RECEIVE_RUTER_SCHEDULE'

export function receiveRuterSchedule(stop, departures) {
  return {
    type: RECEIVE_RUTER_SCHEDULE,
    stop,
    departures,
    receivedAt: moment()
  }
}
