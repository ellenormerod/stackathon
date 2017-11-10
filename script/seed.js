const Models = require('../server/db/models');
const Event = Models.Event;
const User = Models.User;
const UserEvent = Models.UserEvent;
const db = require('../server/db/');


const events = [
  { title: 'Cooking Class', description: 'Come learn to cook a classic italian dinner.', startdate: '2017-12-10', enddate: '2017-12-10', starttime: '15:00', endtime: '17:00', location: 'Cooks Made Here' },
  { title: 'Movie Night!', description: 'Go see the new Star Wars movie with other people who love movies AND Start Wars! There will be an optional hang out afterwards to discuss.', startdate: '2017-12-15', enddate: '2017-12-15', starttime: '19:00', endtime: '23:00', location: 'AMC' },
  { title: 'Book Club', description: 'The December book club has chosen: The Rooster Bar by John Grisham. Read the book and join in on a night with food, friends and books!', startdate: '2017-12-5', enddate: '2017-12-5', starttime: '18:00', endtime: '20:00', location: 'Sara\'s House' },
  { title: 'Dog Lovers Unite!', description: 'Come hang out at the dog park and meet other dog lovers.', startdate: '2017-11-19', enddate: '2017-11-19', starttime: '12:00', endtime: '13:00', location: 'Lincoln Park' },
  { title: 'Fine Dining Club', description: 'The december fine dining club has chosen The Girl and the Goat. Come join other foodies for delicious food and good conversation.', startdate: '2017-12-02', enddate: 'other foodies 2017-12-02', starttime: '18:30', endtime: '21:00', location: 'The Girl and the Goat' },
  { title: 'Bulls game at Theory', description: 'Watch the Bulls game at a fun bar with other Bulls fans!', startdate: '2017-12-17', enddate: '2017-12-17', starttime: '18:30', endtime: '23:00', location: 'Theory in River North' },
  { title: 'Yoga class', description: 'Come attend a free yoga class at the YMCA', startdate: '2017-11-18', enddate: '2017-11-18', starttime: '10:00', endtime: '11:00', location: 'YMCA' },
  { title: 'Board Game Night', description: 'Come over to Haymarket Pub and Brewery for a night of board games!', startdate: '2017-12-09', enddate: '2017-12-09', starttime: '16:00', endtime: '18:00', location: 'Haymarket Pub and Brewery' },
  { title: 'Weekend Getaway to Toronto', description: 'Join a group taking a weekend getaway to Toronto. The trip will feature solo options or group options with great guides on the "best ofs" in the city!', startdate: '2018-01-12', enddate: '2018-01-15', starttime: '00:00', endtime: '00:00', location: 'Toronto' },
  { title: 'Cat Cafe Hang Out', description: 'Come to the brand new cat cafe in Chicago to hang out with both friends and cats!', startdate: '2017-12-17', enddate: '2017-12-17', starttime: '13:00', endtime: '15:00', location: 'Cat Cafe' },
  { title: 'One Day Ski/Snowboard Trip', description: 'Head up to Alpine for a day of skiing and snowboarding and spending time in the lodge meeting fellow winter lovers', startdate: '2018-01-15', enddate: '2018-01-15', starttime: '07:00', endtime: '19:00', location: 'Alpine Ski resort' },
];


const userEvt = [
  { userId: 1, eventId: 2 },
  { userId: 1, eventId: 5 },
  { userId: 1, eventId: 7 },
  { userId: 2, eventId: 4 },
  { userId: 2, eventId: 8 },
  { userId: 2, eventId: 11 },
  { userId: 3, eventId: 1 },
  { userId: 3, eventId: 2 },
  { userId: 3, eventId: 10 },
  { userId: 4, eventId: 3 },
  { userId: 4, eventId: 7 },
  { userId: 4, eventId: 11 },
  { userId: 5, eventId: 6 },
  { userId: 5, eventId: 9 },
  { userId: 6, eventId: 4 },
  { userId: 6, eventId: 5 },
  { userId: 6, eventId: 8 },
  { userId: 7, eventId: 3 },
  { userId: 7, eventId: 8 },
  { userId: 7, eventId: 10 },
  { userId: 8, eventId: 1 },
  { userId: 8, eventId: 5 },
  { userId: 8, eventId: 6 },
  { userId: 9, eventId: 1 },
  { userId: 9, eventId: 9 },
  { userId: 9, eventId: 11 },
  { userId: 10, eventId: 3 },
  { userId: 10, eventId: 4 },
  { userId: 10, eventId: 6 },
  { userId: 10, eventId: 10 }
]

const users = [
  { email: 'johndoe@yahoo.com', password: '123' },
  { email: 'mikeadams@yahoo.com', password: '123' },
  { email: 'angelabennet@yahoo.com', password: '123' },
  { email: 'serenawillians@yahoo.com', password: '123' },
  { email: 'scottiepippen@yahoo.com', password: '123' },
  { email: 'admin@yahoo.com', password: '123' },
  { email: 'sara@yahoo.com', password: '123' },
  { email: 'charlie@yahoo.com', password: '123' },
  { email: 'neal@yahoo.com', password: '123' },
  { email: 'bella@yahoo.com', password: '123' }
]

const seedData = () =>
User.bulkCreate(users)
.then(() => {
  return Event.bulkCreate(events)
})
.then(() => {
  return UserEvent.bulkCreate(userEvt)
})
// async function seed(params) {
//   await db.sync({force: true})
//   console.log('db synced!')
//   // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
//   // executed until that promise resolves!

//   const user = await User.bulkCreate(users)

//   const event = await Event.bulkCreate(events)

//   const userEvent = await UserEvent.bulkCreate(userEvt)

//   // Wowzers! We can even `await` on the right-hand side of the assignment operator
//   // and store the result that the promise resolves to in a variable! This is nice!
//   console.log(`seeded ${user.length} users`)
//   console.log(`seeded successfully`)
// }
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
// seed()
//   .catch(err => {
//     console.error(err.message)
//     console.error(err.stack)
//     process.exitCode = 1
//   })
//   .then(() => {
//     console.log('closing db connection')
//     db.close()
//     console.log('db connection closed')
//   })
