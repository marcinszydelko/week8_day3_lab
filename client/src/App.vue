<template>
  <div id="app">
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

</style>
