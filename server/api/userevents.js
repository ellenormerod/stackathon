const router = require('express').Router()
const { UserEvent, User, Event } = require('../db/models')
module.exports = router

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId
  User.findById(id, {
    include: [Event]
  })
    .then(userevent => res.json(userevent))
    .catch(next)
})

router.get('/rec/:userId', (req, res, next) => {
  const id = req.params.userId
  User.findById(id, {
    include: [Event]
  })
    .then(userevent => {
      // console.log('USER EVET', userevent.events)
      // Promise.all(userevent.events) 
      let promises = userevent.events.map(event => {
        return Event.findById(event.id, {
          include: [User]
        })
      })
      Promise.all(promises)
        .then(eventuser => {
          let another = eventuser.map(user => {
            return User.findById(user.id, {
              include: [Event]
            })
          })
          Promise.all(another)
            .then(final => {
              let end = final.map(user => {
                // console.log('man', user)
                const evt = user.events
                return evt
              })
              res.json(end)
            })
        })
    })
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