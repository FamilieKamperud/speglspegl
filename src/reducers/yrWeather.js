import { RECEIVE_WEATHER } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_WEATHER:
      const { weather, receivedAt } = action;
      debugger;
      return { ...state, ['forecast']: {
        weather, receivedAt
      }};
    default:
      return state;
  }
};
