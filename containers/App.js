import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
//  fetchRuterScheduleIfNeeded,
  invalidateRuterSchedule
} from '../actions'

class App extends Component {
  componentDidMount() {
    const { dispatch} = this.props
 //   dispatch(fetchRuterScheduleIfNeeded())
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps
//    dispatch(fetchRuterScheduleIfNeeded())
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(invalidateRuterSchedule())
//    dispatch(fetchRuterScheduleIfNeeded())
  }

  render() {
    return (
      <div>
        <button>test</button>
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { ruterSchedulesByStop } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = ruterSchedulesByStop['Dælenenga'] || {
    isFetching: true,
    items: []
  }

  return {
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
