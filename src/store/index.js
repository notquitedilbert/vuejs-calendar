import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        currentYear: 2017,
        currentMonth: 11,
        eventFormPosX:0,
        eventFormPosY:0,
        eventFormActive:false,
        events :[
            {description:'random Event 1',date: moment('2017-11-11','YYYY-MM-DD')},
            {description:'random Event 2',date: moment('2017-11-01','YYYY-MM-DD')},
            {description:'random Event 3',date: moment('2017-12-02','YYYY-MM-DD')}
        ],
        eventFormDate:moment()
    },
    mutations:{
        setCurrentMonth(state,payload){
            state.currentMonth = payload
        },
        setCurrentYear(state,payload){
            state.currentYear = payload
        },
        eventFormPos(state,payload){
            state.eventFormPosX = payload.x
            state.eventFormPosY = payload.y
        },
        eventFormActive(state,payload){
            state.eventFormActive = payload;
        },
        addEvent(state,payload){
            state.events.push({
                description:payload,
                date:state.eventFormDate
            })

        },
        eventFormDate(state,payload){
            state.eventFormDate = payload
        }
    }
})
