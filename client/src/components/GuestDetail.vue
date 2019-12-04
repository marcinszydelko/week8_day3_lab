<template lang="html">
  <div class="">
    <h3>{{guest.name}}</h3>
    <p>{{guest.email}}</p>
    <p>{{checkInStatus()}}</p>
    <button type="button" name="delete">Delete</button>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
