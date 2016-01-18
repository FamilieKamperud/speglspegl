import { RECEIVE_RUTER_SCHEDULE } from '../actions'

export default (initialState = {}, action) => {
  switch(action.type) {
    case RECEIVE_RUTER_SCHEDULE:
      break
    default:
      return initialState
  }
}
