import React from 'react'
import RuterSchedule from './RuterSchedule'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Speil</h1>
        <RuterSchedule />
        <h2>Vær</h2>
        <h2>Temperatur</h2>
        <h2>Klokke</h2>
      </div>
    )
  }
}

export default App
