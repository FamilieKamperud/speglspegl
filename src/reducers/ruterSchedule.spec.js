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
      '30 Bygdøy': [ new Date(), new Date(), new Date() ],
      '30 Nydalen': [ new Date(), new Date(), new Date() ]
    }
    const state = ruterSchedule(undefined, receiveRuterSchedule('Dælenenga', departures))
    expect(state['Dælenenga'].departures).to.equal(departures)
    expect(state['Dælenenga'].receivedAt).to.equalDate(new Date())
  })

})
