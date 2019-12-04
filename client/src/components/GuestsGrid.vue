<template lang="html">
  <div class="grid">
    <GuestDetail v-for="guest in guests" :guest="guest" />
  </div>
</template>

<script>
import {eventBus} from '../main.js'
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

    eventBus.$on('guestAdded', guest => {
      this.guests.push(guest)
    })

    eventBus.$on('guest-deleted', id => {
        const index = this.guests.findIndex(guest => guest._id === id)
        this.guests.splice(index, 1)
    })

    eventBus.$on('guest-updated', guest => {
      const index = this.guests.findIndex(word => word._id === guest._id)
      this.guests.splice(index, 1, guest)
    })
  }
}
</script>

<style lang="css" scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>
