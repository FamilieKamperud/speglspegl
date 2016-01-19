import { RECEIVE_RUTER_SCHEDULE } from '../actions'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_RUTER_SCHEDULE:
      return state
    default:
      return state
  }
}
