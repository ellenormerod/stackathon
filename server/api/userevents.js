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

router.delete('/:eventId/:userId', (req, res, next) => {
  const eventId = req.params.eventId
  const userId = req.params.userId
  UserEvent.destroy({
    where: {
      userId: userId,
      eventId: eventId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
})