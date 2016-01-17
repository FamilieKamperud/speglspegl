import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

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
//    const { dispatch} = this.props
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
        <h1>Rutetider</h1>
        <h2>Dælenenga</h2>
        <h3>Nord</h3>
        <ol>
          <li>nå - 28 - Fornebu</li>
          <li>2 min - 20 - Skøyen</li>
        </ol>
        <h3>Sør</h3>
        <ol>
          <li>1 min - 28 - Gokk</li>
        </ol>
        <h2>Københavngata</h2>
        <h3>Nord</h3>
        <h3>Sør</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { ruterSchedulesByStop } = state
  const {
    isFetching,
    lastUpdated
  } = ruterSchedulesByStop['Dælenenga'] || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(RuterSchedule)
