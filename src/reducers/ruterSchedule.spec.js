/*eslint-env node, mocha */
import ruterSchedule from './ruterSchedule'

describe('ruterSchedule', () => {

  it('doesn\'t crash on regular actions', () => {
    const state = ruterSchedule(undefined, {type: 'noop'})
    expect(state).to.deep.equal({})
  })

})
