import React from 'react'
import { connect } from 'react-redux'
import store from '../store/index';
import { fetchEvents, fetchUserEvents, postEvent, fetchEventUsers } from '../store'
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
    let { event, isLoggedIn, handleClick, handleChange, user} = this.props
    return (
      <div>
        <select disabled={!isLoggedIn} onChange={event => handleChange(event, user.id, 1)}>
          <option value="recent">Recently added</option>
          <option value="recommendation">By recommendation</option>
          <option value="date">By date</option>
        </select>
        {event.map(eachEvent => {
          return (
            <div className="ui container" key={eachEvent.id}>
              <h3 >{eachEvent.title}</h3>
              <p >{eachEvent.description}</p>
              <p ><small >{eachEvent.startdate}</small></p>
              <p ><small >{eachEvent.enddate}</small></p>
              <p ><small >{eachEvent.starttime} - {eachEvent.endtime}</small></p>
              <button className="ui teal button" disabled={!isLoggedIn} onClick={() => handleClick(eachEvent.id, user.id)}>Attend</button>
            </div>
          )
        })}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  console.log('STATE', state)
  return {
    isLoggedIn: !!state.user.id,
    event: state.event,
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
    handleChange(event, userId, eventId){
      if (event.target.value === 'recommendation') {
        console.log('user id', userId)
        dispatch(fetchUserEvents(userId))
        dispatch(fetchEventUsers(eventId))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Event)

