/*eslint-env node, mocha */
/*global expect */

import formatTimeToDeparture from './formatTimeToDeparture'
import moment from 'moment'

describe('formatTimeToDeparture', () => {
  it('shows minutes remaining', () => {
    const now = moment()
    let departure = moment(now)
    departure.add(4, 'minutes')

    expect(formatTimeToDeparture(departure, now)).to.equal('4m')
  })

  it('shows seconds remaining', () => {
    const now = moment()
    let departure = moment(now)
    departure.add(13, 'seconds')

    expect(formatTimeToDeparture(departure, now)).to.equal('13s')
  })

  it('shows minutes and seconds remaining', () => {
    const now = moment()
    let departure = moment(now)
    departure.add(1, 'minutes')
    departure.add(2, 'seconds')

    expect(formatTimeToDeparture(departure, now)).to.equal('1m 2s')
  })

  it('show nå when there\'s no time remaining', () => {
    const now = moment()
    expect(formatTimeToDeparture(now, now)).to.equal('nå')
  })
})
