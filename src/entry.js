import Vue from 'vue'
import App from './components/App.vue'

import moment from 'moment-timezone'

import store from './store'

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })


export default function(events){

      let initState = Object.assign({}, store.state, { events })
      store.replaceState(initState)

    return new Vue({

        data: {
          moment
        },
        components: {
          App
        },
        store,
        render(createElement) {

          return createElement('div', { attrs: { id: 'app' } }, [
            createElement('app')
          ])

        }


      })
}