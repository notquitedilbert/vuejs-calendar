<template>
<div>
  <div id="header">
   <div><h1>Vue Calendar</h1></div>
    <div><current-month></current-month></div></div>
  <div id="day-bar">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thr</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div></div>
  <div id="calendar">
      <div v-for="week in weeks" v-bind:key="week.id" class="calendar-week">
          <calendar-day v-for="day in week" :day="day" v-bind:key="day.id">{{day}}</calendar-day>
      </div></div>


<event-form></event-form>
</div>
</template>
<script>
import CalendarDay from "./CalendarDay.vue";
import CurrentMonth from "./CurrentMonth.vue";
import EventForm from "./EventForm.vue";


export default {
  computed: {
    month() {
      return this.$store.state.currentMonth;
    },
    year() {
      return this.$store.state.currentYear;
    },

    days() {
      const SUNDAY = 0;
      const MONDAY = 1;

      // generate all days for the month
      let days = [];
      let currentDay = this.$moment(`${this.year}-${this.month}-1`, "YYYY-M-D");

      do {
        days.push(currentDay);
        currentDay = this.$moment(currentDay).add(1, "days");
      } while (currentDay.month() + 1 === this.month);

      // add padding days
      // previous days
      currentDay = this.$moment(days[0]);
      while (currentDay.day() !== MONDAY) {
        currentDay = this.$moment(currentDay).subtract(1, "days");
        days.unshift(currentDay);
      }

      // add following days to the end
      currentDay = this.$moment(days[days.length - 1]);
      while (currentDay.day() !== SUNDAY) {
        currentDay = this.$moment(currentDay).add(1, "days");
        days.push(currentDay);
      }
      return days;
    },

    weeks() {
      let weeks = [];
      let week = [];

      for (let day of this.days) {
        week.push(day);
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      }
      return weeks;
    }
  },
  components: {
    CalendarDay,
    CurrentMonth,
    EventForm
  }
};
</script>
