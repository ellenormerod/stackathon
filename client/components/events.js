import React from 'react'
import { connect } from 'react-redux'
import store from '../store/index';
import { fetchEvents, fetchUserRec, postEvent, fetchEventUsers, fetchEventsByDate } from '../store'
import {default as createCalendarEvent} from '../../cronofy'
/**
 * COMPONENT
 */
class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadEvents()
  }


  render() {
    let { event, isLoggedIn, handleClick, handleChange, user } = this.props
    return (
      <div>
        <div className="ui inverted segment" >
          <h1 >Events</h1>
          <select disabled={!isLoggedIn} className="ui multiple selection dropdown" onChange={event => handleChange(event, user.id)}>
            <option value="recent">Recently added</option>
            <option value="recommendation">By recommendation</option>
            <option value="date">By date</option>
          </select>
        </div>
        <div className="ui two column doubling grid container" >

          {event.map(eachEvent => {
            const title = eachEvent.title
            const description = eachEvent.description
            const location = eachEvent.location
            const startdate = eachEvent.startdate
            const enddate = eachEvent.enddate
            const starttime = eachEvent.starttime
            const endtime = eachEvent.endtime
            const id = eachEvent.id
            return (
              <div className="column" key={id} >
                <div className="ui center aligned segment">
                  <h3 className="ui header">{title}</h3>
                  <p className="content">{description}</p>
                  <p className="content">{location}</p>                  
                  <p ><small >{startdate} - {enddate}</small></p>
                  <p ><small >{starttime} - {endtime}</small></p>
                  <button className="ui teal button" disabled={!isLoggedIn} onClick={() => {
                    handleClick(eachEvent.id, user.id, title, description, starttime, endtime, startdate, enddate, location )
                  }}>Attend</button>
                </div>

              </div>
            )
            
          })}

        </div>
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  let event = state.event
  let merged = [].concat.apply([], event)
  return {
    isLoggedIn: !!state.user.id,
    event: merged,
    user: state.user,
    userevent: state.userevent
  }
}

const mapDispatch = dispatch => {
  return {
    loadEvents() {
      dispatch(fetchEvents())
    },
    handleClick(eventId, userId) {
      dispatch(postEvent(eventId, userId))
    },
    handleChange(event, userId) {
      if (event.target.value === 'recommendation') {
        dispatch(fetchUserRec(userId))
      }
      if (event.target.value === 'date'){
        dispatch(fetchEventsByDate())
      }
      if (event.target.value === 'recent'){
        dispatch(fetchEvents())
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Event)
