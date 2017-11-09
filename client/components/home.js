import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { isLoggedIn } = props

  return (
    <div>
      <h3>Welcome to Find Friends!</h3>
      <p>Our goal is to connect those in Chicago to people and events that they will enjoy.</p>
      {!isLoggedIn &&
        <p>Please feel free to look at our calendar of events. Once you join you will have access to create your own events and join other events</p>
      }
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(Home)
