import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USER_EVENTS = 'GET_USER_EVENTS'
const ATTEND_EVENT = 'ATTEND_EVENT'
const GET_EVENT_WITH_USERS = 'GET_EVENT_WITH_USERS'
const DELETE_USER_EVENT = 'DELETE_USER_EVENT'
/**
 * ACTION CREATORS
 */
const getUserEvents = userevent => ({ type: GET_USER_EVENTS, userevent })
const attendEvent = event => ({type: ATTEND_EVENT, event})
const getEventUsers = eventuser => ({type: GET_EVENT_WITH_USERS, eventuser})
const deleteUserEvent = id => ({type: DELETE_USER_EVENT, id})
/**
 * THUNK CREATORS
 */

export const fetchUserEvents = userId => dispatch => {
  axios.get(`/api/userevents/${userId}`)
    .then(res => dispatch(getUserEvents(res.data)))
    .catch(err => console.error('Fetching this users events was unsuccessful', err))
}

export const postEvent = (eventId, userId) => dispatch => {
  axios.post('/api/userevents', {eventId, userId})
    .then(res => dispatch(attendEvent(res.data)))
    .catch(err => console.error('Attending event was unsuccessful', err))
}

export const fetchEventUsers = eventId => dispatch => {
  axios.get(`/api/events/${eventId}`)
    .then(res => dispatch(getEventUsers(res.data)))
    .catch(err => console.error('Fetching this users events was unsuccessful', err))
}

export const removeUserEvent = (eventId, userId) => dispatch => {
  dispatch(deleteUserEvent(eventId))
  return axios.delete(`/api/userevents/${eventId}/${userId}`)
    .catch(err => console.error('Delete unsuccessful', err))
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
    case GET_EVENT_WITH_USERS:
      return action.eventuser
    case DELETE_USER_EVENT:
      return userevent.events.filter(event => {
        return event.id !== action.id})
    default:
      return userevent
  }
}