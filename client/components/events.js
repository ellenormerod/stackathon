import React from 'react'
import { connect } from 'react-redux'
import store from '../store/index';
import { fetchEvents, fetchUserEvents, postEvent } from '../store'
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
        <select disabled={!isLoggedIn} onChange={event => handleChange(event, user.id)}>
          <option value="recent">Recently added</option>
          <option value="recommendation">By recommendation</option>
          <option value="date">By date</option>
        </select>
        {event.map(eachEvent => {
          return (
            <div key={eachEvent.id}>
              <h3 >{eachEvent.title}</h3>
              <p >{eachEvent.description}</p>
              <p ><small >{eachEvent.startdate}</small></p>
              <p ><small >{eachEvent.enddate}</small></p>
              <p ><small >{eachEvent.starttime} - {eachEvent.endtime}</small></p>
              <button disabled={!isLoggedIn} onClick={() => handleClick(eachEvent.id, user.id)}>Attend</button>
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
    user: state.user
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
    handleChange(event, userId){
      if (event.target.value === 'recommendation') {
        dispatch(fetchUserEvents(userId))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Event)

