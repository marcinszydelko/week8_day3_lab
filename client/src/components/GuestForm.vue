<template>
  <div class="">
    <form class="">
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

export default {
  data(){
    return{
      name: "",
      email: "",
      checkedin: false
    }
  },
  name: 'GuestForm',
  props: {

  }
}
</script>


<style scoped>

</style>
