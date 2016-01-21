/*eslint-env node, mocha */
/*global expect */

import ruterSchedule from './ruterSchedule'
import { receiveRuterSchedule } from '../actions'

describe('ruterSchedule', () => {

  it('doesn\'t crash on regular actions', () => {
    const state = ruterSchedule(undefined, {type: 'noop'})
    expect(state).to.deep.equal({})
  })

  it('can receive and store departure data', () => {
    const departures = {
        '30 Bygdøy': [ Date.now(), Date.now(), Date.now() ],
        '30 Nydalen': [ Date.now(), Date.now(), Date.now() ]
    }
    const state = ruterSchedule(undefined, receiveRuterSchedule('Dælenenga', departures))
    expect(state['Dælenenga'].departures).to.equal(departures)
    expect(state['Dælenenga'].receivedAt).to.equal(Date.now()) //maybe add some leeway here?
  })

})
