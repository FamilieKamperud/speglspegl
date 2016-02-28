import React from 'react';
import moment from 'moment';

import './clock.styl';

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.interval = setInterval(this.tick, 1000);
    const time = moment();
    this.state = { time };
  }
  tick = () => {
    this.setState({ time: moment()});
  };

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render () {
    return (
      <div className="clock">
        <h5 className="clock-date">{this.state.time.format('dddd Do MMMM')}</h5>
        <h1 className="clock-time">{this.state.time.format('HH:mm')}</h1>
      </div>
    );
  }
}
