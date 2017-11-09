import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USER_EVENTS = 'GET_USER_EVENTS'
const ATTEND_EVENT = 'ATTEND_EVENT'

/**
 * ACTION CREATORS
 */
const getUserEvents = userevent => ({ type: GET_USER_EVENTS, userevent })
const attendEvent = event => ({type: ATTEND_EVENT, event})

/**
 * THUNK CREATORS
 */

export const fetchUserEvents = userId => dispatch => {
  axios.get(`/api//userevents/${userId}`)
    .then(res => dispatch(getUserEvents(res.data)))
    .catch(err => console.error('Fetching this users events was unsuccessful', err))
}

export const postEvent = (eventId, userId) => dispatch => {
  axios.post('/api/userevents', {eventId, userId})
    .then(res => dispatch(attendEvent(res.data)))
    .catch(err => console.error('Attending event was unsuccessful', err))
}
/**
* REDUCER
*/
export default function (userevent = [], action) {
  switch (action.type) {
    case GET_USER_EVENTS:
      return action.userevent
    case ATTEND_EVENT:
      return [...event, action.event]
    default:
      return userevent
  }
}