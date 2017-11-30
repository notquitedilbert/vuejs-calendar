<template>

    <div>
         <button @click="dec">-</button>
        {{formattedDate}}
        <button@click="inc">+</button>
    </div>
</template>

<script>

export default {
    methods:{
        inc(){
            console.log('---->>>> ','inc');
        },
        dec(){console.log('---->>>> ','dec');}
    },
    computed:{
      formattedDate(){
          return this.$moment(`${this.year}-${this.month}`).format('MMMM YYYY')
      },
    month(){return this.$store.state.currentMonth},
    year(){return this.$store.state.currentYear},

  }
}
</script>
