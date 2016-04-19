import React from 'react';
import RuterSchedule from './RuterSchedule';
import Clock from './Clock';
import YrWeather from './YrWeather';

import './app.styl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <RuterSchedule />
        <div className="app-rightColumn">
           <Clock />
           <YrWeather />
        </div>
      </div>
    );
  }
}

export default App;
