<template>
  <v-icon
    id="hamburger"
    :class="{dark: theme === 'light' || theme==='white', light: theme === 'dark'}"
    x-large
    @click="toggleSidebar"
  >menu</v-icon>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import pages from '@/manifest.json'
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  computed: {},
  mounted() {
    EventBus.$on('pageUpdate', id => {
      const result = pages.find(obj => {
        if (obj.attributes.id === id) {
          return obj
        }
      })
      this.theme = result.attributes.theme
    })
  },
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

#hamburger:hover {
  color: #aaa;
}
.dark {
  color: black;
}
.light {
  color: #fff;
}

button:focus {
  outline: 0 !important;
}
</style>
