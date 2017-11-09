const Sequelize = require('sequelize')
const db = require('../db')

const UserEvent = db.define('userEvent', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = UserEvent
