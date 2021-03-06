import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_EVENTS = 'GET_EVENTS'

/**
 * ACTION CREATORS
 */
const getEvents = event => ({type: GET_EVENTS, event})

/**
 * THUNK CREATORS
 */

 export const fetchEvents = () => dispatch => {
   axios.get('/api/events')
    .then(res => dispatch(getEvents(res.data)))
    .catch(err => console.error('Fetching events was unsuccessful', err))
 }

 export const fetchEventsByDate = () => dispatch => {
  axios.get('/api/events/date')
   .then(res => dispatch(getEvents(res.data)))
   .catch(err => console.error('Fetching events was unsuccessful', err))
 }

 export const fetchUserRec = userId => dispatch => {
  axios.get(`/api/userevents/rec/${userId}`)
    .then(res => dispatch(getEvents(res.data)))
    .catch(err => console.error('Fetching this users recommended events was unsuccessful', err))    
}
 /**
 * REDUCER
 */
export default function(event = [], action){
  switch (action.type){
    case GET_EVENTS:
      return action.event
    default:
      return event
  }
}