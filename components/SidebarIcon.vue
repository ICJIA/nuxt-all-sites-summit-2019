<template>
  <v-icon 
    id="hamburger" 
    :class="{dark: isDark, light: isLight}"
    x-large 
    @click="toggleSidebar"
  >menu</v-icon
  >


</template>

<script>
import { EventBus } from '@/event-bus.js'
import config from '@/config'
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  computed: {
    isDark() {
      return this.theme === 'light'
    },
    isLight() {
      return this.theme === 'dark'
    }
  },
  mounted() {
    EventBus.$on('pageUpdate', id => {
      console.log('New page: ', id)
      const result = config.pages.find(obj => {
        if (obj.id === id) {
          return obj
        }
      })
      this.theme = result.theme
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
