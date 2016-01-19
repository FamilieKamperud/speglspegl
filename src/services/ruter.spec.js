import { getDepartures, stops } from './ruter'

describe('ruter api', () => {
  it('should not crash', done => {
    getDepartures(stops.dalenenga).then(data => {
      //do something with data
      console.log(data);
      done();
    });
  })
})
