import { RECEIVE_WEATHER } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_WEATHER:
      const { weather, postalCode, receivedAt } = action;
      return { ...state, [postalCode]: {
        weather, receivedAt
      }};
    default:
      return state;
  }
};
