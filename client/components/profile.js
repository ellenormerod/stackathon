import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = (props) => {

  return (
    <div>
    <h3>HI</h3>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
  }
}

export default connect(mapState)(Home)
