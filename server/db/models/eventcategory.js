const Sequelize = require('sequelize')
const db = require('../db')

const EventCategory = db.define('eventCategory', {
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = EventCategory
