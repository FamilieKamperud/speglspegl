import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/collection/map'

export default class RuterSchedule extends React.Component {
  static propTypes = {
    ruterSchedule: PropTypes.object.isRequired
  };

  render() {
    const { ruterSchedule } = this.props
    return (
      <div>
        <h2>Rutetider</h2>
        {map(ruterSchedule, (stopSchedule, name) => (
          <RuterStop name={name} key={name} departures={stopSchedule.departures} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { ruterSchedule } = state

  return {
    ruterSchedule
  }
}

const RuterStop = ({name, departures}) => (
  <section>
    <h3>{name}</h3>
    <ul>
      {map(departures, (routeDepartures, name) => <RuterRoute name={name} key={name} departures={routeDepartures} />) }
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

export default connect(mapStateToProps)(RuterSchedule)
