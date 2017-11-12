import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Event from './events'
/**
 * COMPONENT
 */
export const Home = (props) => {
  const { isLoggedIn } = props

  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <div className="ui inverted header">

          <h1>Welcome to Newcomers!</h1>
          <p>Our goal is to connect those in Chicago to people and events that they will enjoy.</p>
          {!isLoggedIn &&
            <p>Please feel free to check out our list of events. Once you sign up or log in you will have access to join events</p>
          }
        </div>
      </div>
      <hr/>
      <Event />
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
