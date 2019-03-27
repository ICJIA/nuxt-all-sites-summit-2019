<template>
  <div>
    <v-navigation-drawer 
      v-model="drawer" 
      app 
      
      class="teal darken-1">
      <h2
        v-scroll-to="'#home'"
        class="text-xs-center"
        style="font-size: 34px; margin-top: 20px;margin-bottom: 50px; border-bottom: 1px solid #ccc; padding-bottom: 10px;"
      >
        SUMMIT TITLE HERE
        
      </h2>

      <div
        v-for="page in config.pages"
        :key="page.title"
        class="text-xs-center"
        @click="scrollToSection(page.id)"
      >
        <div 
          :id="'sidebar-' + page.id" 
          class="mb-4 sidebar pr-3 pl-3">
          <div 
            v-scroll-to="'#home'" 
            v-if="page.id === 'home'"
            class="active">
            Home
          </div>
          <div 
            v-scroll-to="'#' + page.id" 
            v-else>
            {{ page.title }}
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import config from '@/config'
export default {
  data() {
    return {
      drawer: null,
      clipped: false,
      config
    }
  },
  computed: {
    isXs() {
      return this.$vuetify.breakpoint.xs
    },
    isSm() {
      return this.$vuetify.breakpoint.sm
    },
    sideBarId() {
      return 'sidebar-'
    }
  },
  mounted() {
    if (this.isXs || this.isSm) {
      this.drawer = false
    } else {
      this.drawer = true
    }
  },
  mounted() {
    EventBus.$on('toggleSidebar', () => {
      this.drawer = !this.drawer
    })
    EventBus.$on('setSidebar', value => {
      this.drawer = value
    })
  },
  methods: {
    scrollToSection(id) {
      if (this.isXs || this.isSm) {
        EventBus.$emit('setSidebar', false)
      }
      EventBus.$emit('scrollTo', id)
    }
  }
}
</script>

<style scoped>
.sidebar {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
}
.sidebar:hover {
  cursor: pointer;
  color: #bbb;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.active {
  color: #42d5c6 !important;
}
</style>
