const Models = require('../server/db/models');
const Category = Models.Category;
const Event = Models.Event;
const User = Models.User;
const EventCategory = Models.EventCategory;
const db = require('../server/db/');

const categories = [
  { value: 'EXERCISE' }, //1
  { value: 'DOGS'}, //2
  { value: 'CATS' }, //3
  { value: 'COOKING' },  //4
  { value: 'FOOD' },  //5
  { value: 'ALCOHOL' },  //6
  { value: 'MOVIES' },  //7
  { value: 'BOOKS' },  //8
  { value: 'TELEVISION' },  //9
  { value: 'TRAVEL'}, //10
  { value: 'OUTDOORSY'}, //11
  { value: 'SPORTS'}, //12
  { value: 'BOARD GAMES'}, //13
];

const events = [
  {title: 'Cooking Class', description: 'Come learn to cook a classic italian dinner.', startdate: '2017-12-10', enddate: '2017-12-10', starttime: '15:00', endtime: '17:00', location: 'Cooks Made Here' },
  {title: 'Movie Night!', description: 'Go see the new Star Wars movie with other people who love movies AND Start Wars! There will be an optional hang out afterwards to discuss.', startdate: '2017-12-15', enddate: '2017-12-15', starttime: '19:00', endtime: '23:00', location: 'AMC'},
  {title: 'Book Club', description: 'The December book club has chosen: The Rooster Bar by John Grisham. Read the book and join in on a night with food, friends and books!', startdate: '2017-12-5', enddate: '2017-12-5', starttime: '18:00', endtime: '20:00', location: 'Sara\'s House'},
  {title: 'Dog Lovers Unite!', description: 'Come hang out at the dog park and meet other dog lovers.', startdate: '2017-11-19', enddate: '2017-11-19', starttime: '12:00', endtime: '13:00', location: 'Lincoln Park'},
  {title: 'Fine Dining Club', description: 'The december fine dining club has chosen The Girl and the Goat. Come join other foodies for delicious food and good conversation.', startdate: '2017-12-02', enddate: 'other foodies 2017-12-02', starttime: '18:30', endtime: '21:00', location: 'The Girl and the Goat'},
  {title: 'Bulls game at Theory', description: 'Watch the Bulls game at a fun bar with other Bulls fans!', startdate: '2017-12-17', enddate: '2017-12-17', starttime: '18:30', endtime: '23:00', location: 'Theory in River North'},
  {title: 'Yoga class', description: 'Come attend a free yoga class at the YMCA', startdate: '2017-11-18', enddate: '2017-11-18', starttime: '10:00', endtime: '11:00', location: 'YMCA'},
  {title: 'Board Game Night', description: 'Come over to Haymarket Pub and Brewery for a night of board games!', startdate: '2017-12-09', enddate: '2017-12-09', starttime: '16:00', endtime: '18:00', location: 'Haymarket Pub and Brewery'},
  {title: 'Weekend Getaway to Toronto', description: 'Join a group taking a weekend getaway to Toronto. The trip will feature solo options or group options with great guides on the "best ofs" in the city!', startdate: '2018-01-12', enddate: '2018-01-15', starttime: '00:00', endtime: '00:00', location: 'Toronto'},
  {title: 'Cat Cafe Hang Out', description: 'Come to the brand new cat cafe in Chicago to hang out with both friends and cats!', startdate: '2017-12-17', enddate: '2017-12-17', starttime: '13:00', endtime: '15:00', location: 'Cat Cafe'},
  {title: 'One Day Ski/Snowboard Trip', description: 'Head up to Alpine for a day of skiing and snowboarding and spending time in the lodge meeting fellow winter lovers', startdate: '2018-01-15', enddate: '2018-01-15', starttime: '07:00', endtime: '19:00', location: 'Alpine Ski resort'},  
];


const eventCat = [
  { eventId: 1, categoryId: 4 },
  { eventId: 1, categoryId: 5 },
  { eventId: 2, categoryId: 7 },
  { eventId: 2, categoryId: 9 },
  { eventId: 3, categoryId: 8 },
  { eventId: 3, categoryId: 7 },
  { eventId: 4, categoryId: 2 },
  { eventId: 4, categoryId: 1 },
  { eventId: 5, categoryId: 5 },
  { eventId: 5, categoryId: 10 },
  { eventId: 6, categoryId: 12 },
  { eventId: 6, categoryId: 6 },
  { eventId: 7, categoryId: 1 },
  { eventId: 8, categoryId: 13 },
  { eventId: 8, categoryId: 6 },
  { eventId: 9, categoryId: 10 },
  { eventId: 9, categoryId: 5 },
  { eventId: 10, categoryId: 3 },
  { eventId: 10, categoryId: 5 },
  { eventId: 11, categoryId: 11 },
  { eventId: 11, categoryId: 1 },  
]

const users = [
  { email: 'johndoe@yahoo.com', password: '123'},
  { email: 'mikeadams@yahoo.com', password: '123'},
  { email: 'angelabennet@yahoo.com', password: '123'},
  { email: 'serenawillians@yahoo.com', password: '123'},
  { email: 'scottiepippen@yahoo.com', password: '123'},
  { email: 'admin@yahoo.com', password: '123'}
]

const seedData = () =>
User.bulkCreate(users)
.then(() => {
  return Category.bulkCreate(categories)
})
.then(() => {
  return Event.bulkCreate(events)
})
.then(() => {
  return EventCategory.bulkCreate(eventCat)
})

const runSeed = () => {
  db.sync({ force: true })
    .then(() => {
      console.log('DB Seeding Ran!');
      return seedData();
    })
    .catch(err => {
      console.log('Seed error', err);
    })
    .then(() => {
      db.close();
      return null;
    });
};

runSeed();