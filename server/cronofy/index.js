
let Cronofy = require('cronofy');

let client = new Cronofy({
  client_id: 'ja8X9QYKoqqMc7OrxUEOAWvnGkD_9wWi',
  client_secret: 'ujp4a6Y1JERkmxJDfWHB_TYzG6D2momnJ-FzQ0zPRi2H-NYT9zGD1XdXpR5QjfhnDolmly8KDQBJKnBSYDWq9Q',
  access_token: '8YQblelE_J4LGTDMz6uVt1EIufiPzQf9',
});

// let options = {
//   tzid: 'America/Chicago'
// };

// client.listCalendars(options)
//   .then(function (response) {
//     let calendars = response.calendars;
//     console.log('CALENDAR', calendars)
//   });


// let options = {
//   calendar_id: "cal_WgNdvo2@z0A0AARz_IxvIQlgfunaFtiEWvAeOoQ",
//   event_id: "unique-event-id",
//   summary: "Big Party",
//   description: "Have a good time.",
//   start: "2017-11-18T19:00:00CST",
//   end: "2017-11-18T21:30:00CST",
//   location: {
//     description: "Claire's house"
//   }
// };

// client.createEvent(options)
//   .then(function () {
//       // Success
//       console.log('YAY')
//   });


// let options = {
//   tzid: 'Etc/UTC'
// };

// client.readEvents(options)
//   .then(function (response) {
//       let events = response.events;
//       console.log('WOO', events)
//   });


// let options = {
//   calendar_id: 'cal_WgNdvo2@z0A0AARz_IxvIQlgfunaFtiEWvAeOoQ',
//   event_id: 'unique-event-id'
// };

// client.deleteEvent(options)
//   .then(function (response) {
//     // success
//   });
