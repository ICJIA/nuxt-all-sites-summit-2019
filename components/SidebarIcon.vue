<template>
  <v-icon 
    id="hamburger" 
    color="black" 
    x-large 
    @click="toggleSidebar"
  >menu</v-icon
  >
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  methods: {
    toggleSidebar() {
      EventBus.$emit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
#hamburger {
  position: fixed;
  top: 10px;
  margin-left: 15px;
}
</style>
