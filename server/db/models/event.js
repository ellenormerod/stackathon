const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  startdate:{
    type: Sequelize.STRING
  },
  enddate:{
    type: Sequelize.STRING
  },
  starttime: {
    type: Sequelize.TIME
  },
  endtime:{
    type: Sequelize.TIME
  },
  location:{
    type: Sequelize.STRING
  }
})

module.exports = Event
