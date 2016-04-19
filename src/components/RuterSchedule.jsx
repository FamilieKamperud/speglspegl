import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import formatTimeToDeparture from '../lib/formatTimeToDeparture';
import moment from 'moment';


import './ruterSchedule.styl';

export default class RuterSchedule extends React.Component {
  static propTypes = {
    ruterSchedule: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.interval = setInterval(this.tick, 1000);
    const now = moment();
    this.state = { now };
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  tick = () => {
    this.setState({ now: moment()});
  };

  render() {
    const { ruterSchedule } = this.props;
    const { now } = this.state;
    return (
      <div className="ruterSchedule">
        <h2 className="ruterSchedule-heading">Rutetider</h2>
        <ul className="ruterSchedule-stops">
          {map(ruterSchedule, (stopSchedule, stopName) => (
            <Stop name={stopName} key={stopName} now={now} departures={stopSchedule.departures} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { ruterSchedule } = state;
  return { ruterSchedule };
};

const Stop = ({name, departures, now}) => (
  <li className="ruterSchedule-stop">
    <h3 className="ruterSchedule-stop-name">{name}</h3>
    <ul className="ruterSchedule-stop-routes">
      {map(departures, (routeDepartures, name) => {
        let [direction, busLine] = name.split(' ');
        let finalDestination = routeDepartures[0].finalDestination;
        let title = busLine+' '+finalDestination;
        return (<Route name={title} key={title} now={now}
          departures={routeDepartures}/>);
      })}
    </ul>
  </li>
);
Stop.propTypes = {
  departures: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  now: React.PropTypes.object.isRequired
};

const Route = ({departures, name, now}) => (
  <li className="ruterSchedule-stop-route">
    <h5 className="ruterSchedule-stop-route-name">{name}</h5>
    <ul className="ruterSchedule-stop-route-times">
      {departures.map((departure, index) => {
        return (<li key={index} className="ruterSchedule-stop-route-time">
          {formatTimeToDeparture(departure.expectedArrival, now)}
        </li>);
      })}
    </ul>
  </li>
);
Route.propTypes = {
  departures: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  now: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(RuterSchedule);
