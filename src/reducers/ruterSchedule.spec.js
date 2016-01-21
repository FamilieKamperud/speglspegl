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
    const departures = {} //TODO decide how to store departure data
    const state = ruterSchedule(undefined, receiveRuterSchedule('dalenenga', departures))
    expect(state.dalenenga.departures).to.equal(departures)
    expect(state.dalenenga.receivedAt).to.equal(Date.now()) //maybe add some leeway here?
  })

})
