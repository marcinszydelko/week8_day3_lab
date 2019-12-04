<template>
  <div id="app">
    <h1>Bates Motel</h1>
    <GuestForm />
    <GuestsGrid />
  </div>
</template>

<script>
import GuestForm from './components/GuestForm.vue'
import GuestsGrid from './components/GuestsGrid.vue'

export default {
  name: 'app',
  components: {
    GuestForm,
    GuestsGrid
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
  #id{
    margin: 0 auto;
  }
  h1{
    text-align: center;
    font-size: 60px;
  }
  body{
    background-image: url("https://cdna.artstation.com/p/assets/images/images/012/765/438/large/dmitry-mann-1.jpg?1536399785");
    font-family: 'Bebas Neue', cursive;
    
  }

</style>
