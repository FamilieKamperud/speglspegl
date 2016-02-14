import React from 'react'
import RuterSchedule from './RuterSchedule'
import Clock from './Clock'

import './app.styl'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <RuterSchedule />
        <Clock />
      </div>
    )
  }
}

export default App
