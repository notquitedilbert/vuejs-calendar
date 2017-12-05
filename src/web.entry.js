import './style.scss'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date, 'YYYY-MM-DD')
  }
});

import VueCalendar from './entry.js'
setTimeout(() => {
  VueCalendar(events).$mount('#app');
}, 2000);

