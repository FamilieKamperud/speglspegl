/*eslint-env node, mocha */
/*global expect */

import moment from 'moment';
import yrWeather from './yrWeather';
import { receiveWeather } from '../actions';

describe('yrWeather', () => {

  it('doesn\'t crash on regular actions', () => {
    const state = yrWeather(undefined, {type: 'noop'});
    expect(state).to.deep.equal({});
  });

  it('can receive and store weather data', () => {
    const weather  = {
      '2016-02-21T13:00:00 2016-02-21T18:00:00': {
        period: '2',
        symbol: '04',
        precipitation: '0',
        windSpeed: '2.0',
        temperature: '1'
      },
      '2016-02-21T18:00:00 2016-02-22T00:00:00': {
        period: '3',
        symbol: 'mf/03n.44',
        precipitation: '0',
        windSpeed: '1.4',
        temperature: '0'
      },
      '2016-02-22T00:00:00 2016-02-22T06:00:00':{
        period: '0',
        symbol: 'mf/03n.47',
        precipitation: '0',
        windSpeed: '1.6',
        temperature: '-2'
      }
    };
    const state = yrWeather(undefined, receiveWeather(weather));
    expect(state['forecast'].weather).to.equal(weather);
    expect(state['forecast'].receivedAt.isSame(moment(), 'day')).to.be.true;
  });

});
