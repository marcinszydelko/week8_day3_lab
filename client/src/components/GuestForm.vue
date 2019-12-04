<template>
  <div class="">
    <form class="" v-on:submit="saveGuest">
      <label for="name">Name:</label>
      <input type="text" v-model="name" >

      <label for="email">Email:</label>
      <input type="email" v-model="email">

      <label for="checkedin">Checked in status:</label>
      <select v-model="checkedin">
        <option value="">Checked in</option>
        <option value="">Not checked in</option>
      </select>
      <input type="submit" value="Save">
    </form>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import GuestService from '../services/GuestService.js'
export default {
  data(){
    return{
      name: "",
      email: "",
      checkedin: null
    }
  },
  name: 'GuestForm',
  methods: {
    saveGuest(event){
      event.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checkedin: this.checkedin
      }
      GuestService.addGuest(guest)
      .then(res => eventBus.$emit("guestAdded", res))


    }
  }
}
</script>


<style scoped>

</style>
