const router = require('express').Router()
const {UserEvent, User, Event} = require('../db/models')
module.exports = router

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId
  User.findById(id, {
    include: [Event]
  })
    .then(userevent => res.json(userevent))
    .catch(next)
})

router.post('/', (req, res, next) => {
  UserEvent.create(req.body)
    .then(userevent => res.json(userevent))
    .catch(next)
})