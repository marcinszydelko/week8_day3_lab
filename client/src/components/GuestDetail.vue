<template lang="html">
  <div class="grid-element">
    <table>
      
    </table>
    <h3>{{guest.name}}</h3>
    <p>{{guest.email}}</p>
    <p>{{checkInStatus()}}</p>
    <button @click="buttonDelete" type="button" name="delete">Delete</button>
    <button @click="buttonUpdate" type="button" name="update">Update</button>
    <br><br>
      <form v-if="showUpdate" v-on:submit="saveUpdate" >
        <label for="name">Name:</label>
        <input type="text" v-model="name" >
        <br>
        <label for="email">Email:</label>
        <input type="email" v-model="email" >
        <br>
        <label for="checkedin">Checked in status:</label>
        <select v-model="checkedin" >
          <option value="true">Checked in</option>
          <option value="false">Not checked in</option>
        </select>
        <input type="submit" value="Save">
      </form>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import  GuestService from '../services/GuestService.js'
export default {
  data(){
    return{
      name: this.guest.name,
      email: this.guest.email,
      checkedin: this.guest.checkedin,
      showUpdate: false
    }
  },
  name: "GuestDetail",
  props: ['guest'],
  methods: {
    checkInStatus(){
      if(this.guest.checkedin === "true"){
        return "Checked in"
      }else {
        return "Not checked in"
      }
    },
    buttonDelete(){
      GuestService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },
    buttonUpdate(){
      return this.showUpdate = true;
    },
    saveUpdate(event){
      event.preventDefault()
      const updatedGuest = {
        // _id: this.guest._id,
        name: this.name,
        email: this.email,
        checkedin: this.checkedin
      }
      console.log("guest:", updatedGuest);
      GuestService.updateGuest(updatedGuest, this.guest._id)
      .then(res => eventBus.$emit('guest-updated', res));
      this.showUpdate = !this.showUpdate;
    }
  }
}
</script>

<style lang="css" scoped>
.grid-element{
  border: 1px solid grey;
  border-radius: 5px;
  width: 300px;
  padding: 20px;
  background-color: lightgray;
  font-size: 20px;
}

input {
  margin-bottom: 10px;
}

label{
  margin-right: 8px;
}
</style>
