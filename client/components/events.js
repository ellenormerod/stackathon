import React from 'react'
import { connect } from 'react-redux'
import store from '../store/index';
import { fetchEvents } from '../store'
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
    return (
      <div>
        <h3>Hi</h3>
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  console.log('STATE', state)
  return {
    isLoggedIn: !!state.user.id,
    event: state.event
  }
}

const mapDispatch = dispatch => {
  return {
    loadEvents() {
      dispatch(fetchEvents())
    }
  }
}

export default connect(mapState, mapDispatch)(Event)
