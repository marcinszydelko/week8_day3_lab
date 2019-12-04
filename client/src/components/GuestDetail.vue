<template lang="html">
  <div class="">
    <h3>{{guest.name}}</h3>
    <p>{{guest.email}}</p>
    <p>{{checkInStatus()}}</p>
    <button @click="buttonDelete" type="button" name="delete">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import  GuestService from '../services/GuestService.js'
export default {
  name: "GuestDetail",
  props: ['guest'],
  methods: {
    checkInStatus(){
      if(this.guest.checkedin){
        return "Checked in"
      }else {
        return "Not checked in"
      }
    },
    buttonDelete(){
      GuestService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
