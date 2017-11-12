import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import Home from './home'
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn, user } = props

  return (
    <div >
      <div className="ui inverted vertical masthead center aligned segment">
        <nav className="ui large secondary menu">
          <div className="item">
            <Link className="ui black button" to="/">Home</Link>
          </div>
          {
            isLoggedIn
              ? <div className="right item">
                {/* The navbar will show these links after you log in */}
                <Link className="ui black button" to={`/${user.id}`}>Profile</Link>
                <a className="ui black button" href="#" onClick={handleClick}>Logout</a>
              </div>
              : <div className="right item">
                {/* The navbar will show these links before you log in */}
                <Link className="ui black button" to="/login">Login</Link>
                <Link className="ui black button" to="/signup">Sign Up</Link>
              </div>
          }
        </nav>
      </div>
      {children}
    </div>

  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
