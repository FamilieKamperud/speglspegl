import { getDepartures, stops, parseDestinationInfo } from './ruter'
import mockGetDeparturesResponse from '../mockData/mockGetDeparturesResponse.json'
import moment from 'moment'


describe('ruter api', () => {
  it('should not crash', done => {
    getDepartures(stops.dalenenga).then(data => {
      //do something with data
      done()
    })
  })
  it('should parse data appropriately', ()=> {
    const result = parseDestinationInfo(mockGetDeparturesResponse)
    const resultShouldBe = {
      '30 Bygdøy': [ moment("2016-01-21T21:55:00+01:00"), moment("2016-01-21T22:15:00+01:00"), moment("2016-01-21T22:35:00+01:00") ],
      '30 Nydalen': [ moment("2016-01-21T21:48:14+01:00"), moment("2016-01-21T22:09:27+01:00"), moment("2016-01-21T22:29:02.315+01:00") ]
    };
    expect(result).to.deep.equal(resultShouldBe);
  })
})
