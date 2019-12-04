<template lang="html">
  <div class="">
    <GuestDetail v-for="guest in guests" :guest="guest" />
  </div>
</template>

<script>
import GuestDetail from './GuestDetail'
import GuestService from '../services/GuestService.js'
export default {
  data(){
    return{
      guests: []
    }
  },
  name: "GuestGrid",
  components: {
    GuestDetail
  },
  mounted() {
    GuestService.getGuests()
    .then(guests => this.guests = guests);
  }
}
</script>

<style lang="css" scoped>
</style>
