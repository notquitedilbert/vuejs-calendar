import Vue from 'vue'
import App from './components/App.vue'
import './style.scss'
import moment from 'moment-timezone'

import store from './store'

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })




  let events = window.__INITIAL_STATE__.map(event =>{
    return {
        description:event.description,
        date:moment(event.date,'YYYY-MM-DD')
      }
  })

  let initState = Object.assign({}, store.state, { events})
store.replaceState(initState)

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store

});
