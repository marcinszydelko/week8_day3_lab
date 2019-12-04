<template>
  <div class="">
    <form class="" v-on:submit="saveGuest">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required>

      <label for="email">Email:</label>
      <input type="email" v-model="email" required>

      <label for="checkedin">Checked in status:</label>
      <select v-model="checkedin">
        <option value="true">Checked in</option>
        <option value="false">Not checked in</option>
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
      this.name = "";
      this.email = "";
      this.checkedin = null;
    }
  }
}
</script>


<style scoped>

</style>
