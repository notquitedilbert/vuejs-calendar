import VueCalendar from './entry.js'


export default function(context){
    return VueCalendar(context.events)
}