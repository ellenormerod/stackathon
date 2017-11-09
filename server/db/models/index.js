const User = require('./user')
const Event = require('./event')
const Category = require('./category')
const EventCategory = require('./eventcategory')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Event.belongsToMany(Category, {through: EventCategory})
Category.belongsToMany(Event, {through: EventCategory})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Event,
  Category,
  EventCategory
}
