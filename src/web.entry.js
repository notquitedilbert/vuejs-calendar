import Vue from 'vue'
import App from './components/App.vue'
import './style.scss'
import moment from 'moment-timezone'

import Vuex from 'vuex'

Vue.use(Vuex)

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype,'$moment',{get(){return this.$root.moment}})

new Vue({
  el: '#app',
  data:{
    moment
  },
  components:{
    App
  },
  store:{
    state:{
      currentYear:2017,
      currentMonth:11

    }
  }
});
