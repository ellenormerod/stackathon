import React from 'react'
import { connect } from 'react-redux'
import { fetchUserEvents, removeUserEvent } from '../store'

/**
 * COMPONENT
 */
class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const userId = this.props.user.id
    this.props.loadEvents(userId)
  }

  render() {
    let { userevent, handleClick, user} = this.props
    const userEvent = userevent.events ? userevent.events : userevent
    return (
      <div className="ui two column doubling grid container" >
        {userEvent.map(eachEvent => {
          const title = eachEvent.title
          const description = eachEvent.description
          const location = eachEvent.location
          const startdate = eachEvent.startdate
          const enddate = eachEvent.enddate
          const starttime = eachEvent.starttime
          const endtime = eachEvent.endtime
          const id = eachEvent.id ? eachEvent.id : eachEvent.eventId
          return (
            <div className="column" key={id} >
              <div className="ui center aligned segment">
                <h3 className="ui header">{title}</h3>
                <p className="content">{description}</p>
                <p className="content">{location}</p>
                <p ><small >{startdate} - {enddate}</small></p>
                <p ><small >{starttime} - {endtime}</small></p>
                <button className="ui teal button" onClick={() => handleClick(id, user.id)}>Delete</button>
              </div>

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
const mapState = (state) => {
  return {
    event: state.event,
    user: state.user,
    userevent: state.userevent
  }
}

const mapDispatch = dispatch => {
  return {
    loadEvents(userId) {
      dispatch(fetchUserEvents(userId))
    },
    handleClick(eventId, userId){
      dispatch(removeUserEvent(eventId, userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Profile)
