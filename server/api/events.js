const router = require('express').Router()
const {Event, User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Event.findAll()
    .then(event => res.json(event))
    .catch(next)
})

router.get('/:eventId', (req, res, next) => {
  const id = req.params.eventId
  Event.findById(id,{
    include: [User]
  })
    .then(eventuser => res.json(eventuser))
    .catch(next)    
})