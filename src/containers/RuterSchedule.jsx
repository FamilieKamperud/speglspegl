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
        <h3>Dælenenga</h3>
        <h4>Nord</h4>
        <ol>
          <li>nå - 28 - Fornebu</li>
          <li>2 min - 20 - Skøyen</li>
        </ol>
        <h4>Sør</h4>
        <ol>
          <li>1 min - 28 - Gokk</li>
        </ol>
        <h3>Københavngata</h3>
        <h4>Nord</h4>
        <h4>Sør</h4>
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
    isFetching: true
  }

  return {
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(RuterSchedule)
