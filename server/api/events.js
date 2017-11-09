const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Event.findAll()
    .then(event => res.json(event))
    .catch(next)
})