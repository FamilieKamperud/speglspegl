import { combineReducers } from 'redux';
import ruterSchedule from './ruterSchedule';
import yrWeather from './yrWeather';

const rootReducer = combineReducers({
  ruterSchedule,
  yrWeather
});

export default rootReducer;
