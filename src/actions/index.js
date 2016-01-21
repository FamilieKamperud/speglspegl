//import fetch from 'isomorphic-fetch'

export const RECEIVE_RUTER_SCHEDULE = 'RECEIVE_RUTER_SCHEDULE'

//export const REQUEST_POSTS = 'REQUEST_POSTS'
//export const SELECT_REDDIT = 'SELECT_REDDIT'
//export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
//
//export function selectReddit(reddit) {
//  return {
//    type: SELECT_REDDIT,
//    reddit
//  }
//}
//
//export function invalidateReddit(reddit) {
//  return {
//    type: INVALIDATE_REDDIT,
//    reddit
//  }
//}
//
//function requestPosts(reddit) {
//  return {
//    type: REQUEST_POSTS,
//    reddit
//  }
//}

export function receiveRuterSchedule(stop, departures) {
  return {
    type: RECEIVE_RUTER_SCHEDULE,
    stop,
    departures,
    receivedAt: Date.now()
  }
}

//function fetchPosts(reddit) {
//  return dispatch => {
//    dispatch(requestPosts(reddit))
//    return fetch(`https://www.reddit.com/r/${reddit}.json`)
//      .then(response => response.json())
//      .then(json => dispatch(receivePosts(reddit, json)))
//  }
//}
//
//function shouldFetchPosts(state, reddit) {
//  const posts = state.postsByReddit[reddit]
//  if (!posts) {
//    return true
//  }
//  if (posts.isFetching) {
//    return false
//  }
//  return posts.didInvalidate
//}
//
//export function fetchRuterScheduleIfNeeded(stop) {
//  return (dispatch, getState) => {
////    if (shouldFetchPosts(getState(), reddit)) {
////      return dispatch(fetchPosts(reddit))
////    }
//  }
//}
