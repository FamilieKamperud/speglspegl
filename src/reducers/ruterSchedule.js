import { RECEIVE_RUTER_SCHEDULE } from '../actions'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_RUTER_SCHEDULE:
      const { departures, stop, receivedAt } = action
      return { ...state, [stop]: {
        departures, receivedAt
      }}
    default:
      return state
  }
}
