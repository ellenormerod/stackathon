
// import Cronofy from 'cronofy';
// import axios from 'axios';
let Cronofy = require('cronofy');


// let options = {
//   tzid: 'America/Chicago'
// };

// client.listCalendars(options)
//   .then(function (response) {
//     let calendars = response.calendars;
//     console.log('CALENDAR', calendars)
//   });

const createCalendarEvent = (summary, description, start, end, location, id) => {
  console.log('HEY I DID IT', summary, description, start, end, location, id)
  // "2017-11-18T21:30:00CST"
  let client = new Cronofy({
    client_id: 'ja8X9QYKoqqMc7OrxUEOAWvnGkD_9wWi',
    client_secret: 'ujp4a6Y1JERkmxJDfWHB_TYzG6D2momnJ-FzQ0zPRi2H-NYT9zGD1XdXpR5QjfhnDolmly8KDQBJKnBSYDWq9Q',
    access_token: '8YQblelE_J4LGTDMz6uVt1EIufiPzQf9',
  });

  let options = {
    calendar_id: "cal_WgNdvo2@z0A0AARz_IxvIQlgfunaFtiEWvAeOoQ",
    event_id: id,
    summary: summary,
    description: description,
    start: start,
    end: end,
    location: {
      description: location
    }
  };

  // client.createEvent(options)
  //   .then(() => {
  //       // Success
  //       console.log('YAY')
  //   });

  // axios({
  //   method: 'post',
  //   url: '/v1/calendars/cal_WgNdvo2@z0A0AARz_IxvIQlgfunaFtiEWvAeOoQ/events',
  //   baseURL: 'https://api.cronofy.com',
  //   data: options,
  //   headers: {client_id: 'ja8X9QYKoqqMc7OrxUEOAWvnGkD_9wWi',
  //     client_secret: 'ujp4a6Y1JERkmxJDfWHB_TYzG6D2momnJ-FzQ0zPRi2H-NYT9zGD1XdXpR5QjfhnDolmly8KDQBJKnBSYDWq9Q',
  //     access_token: '8YQblelE_J4LGTDMz6uVt1EIufiPzQf9',
  //     'Content-Type': 'application/json ; charset=utf-8',
  //   }
  // })
  //   .then(res => console.log('WHATTTTTT', res.data))

}


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

module.exports = createCalendarEvent
