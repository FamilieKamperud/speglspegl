/*eslint-env node, mocha */
/*global expect */

import moment from 'moment'
import ruterSchedule from './ruterSchedule'
import { receiveRuterSchedule } from '../actions'

describe('ruterSchedule', () => {

  it('doesn\'t crash on regular actions', () => {
    const state = ruterSchedule(undefined, {type: 'noop'})
    expect(state).to.deep.equal({})
  })

  it('can receive and store departure data', () => {
    const departures = {
      '30 Bygdøy': [ moment(), moment(), moment() ],
      '30 Nydalen': [ moment(), moment(), moment() ]
    }
    const state = ruterSchedule(undefined, receiveRuterSchedule('Dælenenga', departures))
    expect(state['Dælenenga'].departures).to.equal(departures)
    expect(state['Dælenenga'].receivedAt.isSame(moment(), 'day')).to.be.true
  })

})
