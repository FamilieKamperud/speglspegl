/*eslint-env node, mocha */
/*global expect */

import { getWeather, postalCode, parseWeatherInfo, YR_SYMBOL_URL } from './yr';
import mockGetWeatherResponse from 'raw!../mockData/mockGetWeatherResponse.xml';

describe('yr api', () => {
  xit('should not crash', function(done) {
    getWeather(postalCode).then(() => {
      done();
    }, () => {
      //phantomJS fails a this network request. Chrome does not
      done();
    });
  });
  it('should parse data appropriately', ()=> {
    const result = parseWeatherInfo(mockGetWeatherResponse);
    expect(Object.keys(result).length).to.equal(3);
    const resultShouldBe = [
      {
        from: '2016-02-21T13:00:00',
        to: '2016-02-21T18:00:00',
        period: '2',
        symbol: YR_SYMBOL_URL+'04.png',
        precipitation: '0',
        windSpeed: '2.0',
        temperature: '1'
      },
      {
        from: '2016-02-21T18:00:00',
        to: '2016-02-22T00:00:00',
        period: '3',
        symbol: YR_SYMBOL_URL+'mf/03n.44.png',
        precipitation: '0',
        windSpeed: '1.4',
        temperature: '0'
      },
      {
        from: '2016-02-22T00:00:00',
        to: '2016-02-22T06:00:00',
        period: '0',
        symbol: YR_SYMBOL_URL+'mf/03n.47.png',
        precipitation: '0',
        windSpeed: '1.6',
        temperature: '-2'
      }
    ];
    expect(result).to.deep.equal(resultShouldBe);
  });
});
