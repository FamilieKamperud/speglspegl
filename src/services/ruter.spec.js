/*eslint-env node, mocha */
/*global expect */

import { getDepartures, stops, parseDestinationInfo } from './ruter';
import mockGetDeparturesResponse from '../mockData/mockGetDeparturesResponse.json';
import moment from 'moment';


describe('ruter api', () => {
  it('should not crash', done => {
    getDepartures(stops.dalenenga).then(data => {
      //do something with data
      done();
    });
  });
  it('should parse data appropriately', ()=> {
    const result = parseDestinationInfo(mockGetDeparturesResponse);
    const resultShouldBe = {
      '2 30': [ {expectedArrival: moment('2016-01-21T21:55:00+01:00'), finalDestination: 'Bygdøy'}, {expectedArrival: moment('2016-01-21T22:15:00+01:00'), finalDestination: 'Bygdøy'}, {expectedArrival: moment('2016-01-21T22:35:00+01:00'), finalDestination: 'Bygdøy'} ],
      '1 30': [ {expectedArrival: moment('2016-01-21T21:48:14+01:00'), finalDestination: 'Nydalen'}, {expectedArrival: moment('2016-01-21T22:09:27+01:00'), finalDestination: 'Nydalen'}, {expectedArrival: moment('2016-01-21T22:29:02.315+01:00'), finalDestination: 'Nydalen'} ]
    };
    expect(result).to.deep.equal(resultShouldBe);
  });
});
