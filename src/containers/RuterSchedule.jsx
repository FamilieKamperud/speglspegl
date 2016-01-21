import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/collection/map'

//import {
//  fetchRuterScheduleIfNeeded,
//  invalidateRuterSchedule
//} from '../actions'

export default class RuterSchedule extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

//  componentDidMount() {
//    const { dispatch } = this.props
//    dispatch(fetchRuterScheduleIfNeeded())
//  }

//  componentWillReceiveProps(nextProps) {
//    const { dispatch } = nextProps
//    dispatch(fetchRuterScheduleIfNeeded())
//  }

//  handleRefreshClick(e) {
//    e.preventDefault()
//
//    const { dispatch } = this.props
//    dispatch(invalidateRuterSchedule())
//    dispatch(fetchRuterScheduleIfNeeded())
//  }

  render() {
    return (
      <div>
        <h2>Rutetider</h2>
        <ul>
          <RuterStop name="Dælenenga" departures={mockDalenenga} />
        </ul>
        <ul>
          <RuterStop name="Københavngata" departures={mockDalenenga} />
        </ul>
        <ul>
          <RuterStop name="Birkelunden" departures={mockDalenenga} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { ruterSchedulesByStop } = state
  //  const {
  //    isFetching,
  //    lastUpdated
  //  } = ruterSchedulesByStop['Dælenenga'] || {
  //    isFetching: true
  //  }

  return {
    ruterSchedulesByStop
    //    isFetching,
    //    lastUpdated
  }
}

const RuterStop = ({name, departures}) => (
  <section>
    <h3>{name}</h3>
    <ul>
      {map(departures, (routeDepartures, name) => <RuterRoute name={name} departures={routeDepartures} />) }
    </ul>
  </section>
)

const RuterRoute = ({departures, name}) => (
  <section>
    <h5>{name}</h5>
    <ul>
      {departures.map((departure, index) => <li key={index}>{departure}</li>)}
    </ul>
  </section>
)

const mockDepartures = [
  Date.now(),
  Date.now(),
  Date.now()
]

const mockDalenenga = {
  '30 Bygdøy': mockDepartures,
  '30 Nydalen': mockDepartures
}

export default connect(mapStateToProps)(RuterSchedule)
