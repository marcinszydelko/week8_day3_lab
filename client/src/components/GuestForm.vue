<template>
  <div class="">
    <form class="" v-on:submit="saveGuest">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required>
      <br>
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
form {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 15px 20px;
  width: 300px;
  background-color: lightgray;
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 20px;
}

input {
  margin-bottom: 10px;
}

label{
  margin-right: 8px;
}

</style>
