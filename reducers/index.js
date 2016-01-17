import { combineReducers } from 'redux'
import {
  INVALIDATE_RUTER_SCHEDULE,
  REQUEST_RUTER_SCHEDULE,
  RECEIVE_RUTER_SCHEDULE
} from '../actions'

function stops(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_RUTER_SCHEDULE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_RUTER_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_RUTER_SCHEDULE:
      debugger;
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function ruterScheduleByStop(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_RUTER_SCHEDULE:
    case RECEIVE_RUTER_SCHEDULE:
    case REQUEST_RUTER_SCHEDULE:
      //replace with es* stuff
      return Object.assign({}, state, {
        [action.stop]: stops(state[action.stop], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  ruterScheduleByStop
})

export default rootReducer
