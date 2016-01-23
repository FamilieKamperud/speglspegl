import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/collection/map'
import formatTimeToDeparture from '../lib/formatTimeToDeparture'
import moment from 'moment'
moment.locale('nb')

export default class RuterSchedule extends React.Component {
  static propTypes = {
    ruterSchedule: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this.interval = setInterval(this.tick, 1000)
    const now = moment()
    this.state = { now }
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  tick = () => {
    this.setState({ now: moment()})
  };

  render() {
    const { ruterSchedule } = this.props
    const { now } = this.state
    return (
      <div>
        <h2>Rutetider</h2>
        {map(ruterSchedule, (stopSchedule, name) => (
          <RuterStop name={name} key={name} now={now}
            departures={stopSchedule.departures} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { ruterSchedule } = state
  return { ruterSchedule }
}

const RuterStop = ({name, departures, now}) => (
  <section>
    <h3>{name}</h3>
    <ul>
      {map(departures, (routeDepartures, name) => (
        <RuterRoute name={name} key={name} now={now}
          departures={routeDepartures}/>
      ))}
    </ul>
  </section>
)

const RuterRoute = ({departures, name, now}) => (
  <section>
    <h5>{name}</h5>
    <ul>
      {departures.map((departure, index) => (
        <li key={index}>{formatTimeToDeparture(departure, now)}</li>
      ))}
    </ul>
  </section>
)

export default connect(mapStateToProps)(RuterSchedule)
