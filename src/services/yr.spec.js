import { getWeather, postalCode, parseWeatherInfo } from './yr'
import mockGetWeatherResponse from 'raw!../mockData/mockGetWeatherResponse.xml'
import moment from 'moment'

describe('yr api', () => {
  // it('should not crash', function(done) {
  //   getWeather(postalCode).then(data => {
  //     console.log(data)
  //     done()
  //   }, err => {
  //     //phantomJS fails a this network request. Chrome does not
  //     console.log(err)
  //     done()
  //   })
  // })
  it('should parse data appropriately', ()=> {
    const result = parseWeatherInfo(mockGetWeatherResponse);
    expect(Object.keys(result).length).to.equal(3);
    const firstResult = result['2016-02-21T13:00:00 2016-02-21T18:00:00'];
    expect(firstResult.period).to.equal('2');
    expect(firstResult.symbol).to.equal('04');
    expect(firstResult.precipitation).to.equal('0');
    expect(firstResult.windSpeed).to.equal('2.0');
    expect(firstResult.temperature).to.equal('1');
    const resultShouldBe = {
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
        period: '3',
        symbol: 'mf/03n.47',
        precipitation: '0',
        windSpeed: '1.6',
        temperature: '-2'
      }
    };
    //expect(result).to.deep.equal(resultShouldBe);
  })
})
