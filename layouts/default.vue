<template>
  <v-app>
    <sidebar/>
    <v-content>
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-content>
   
  </v-app>
</template>

<script>
import config from '@/config'
import Sidebar from '@/components/Sidebar'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      currentPage: null
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      //console.log(newValue)
      EventBus.$emit('pageUpdate', newValue)
    }
  },

  mounted() {
    let page = document.querySelectorAll('.page')
    let pages = {}
    let p = 0
    let offset = 0

    Array.prototype.forEach.call(page, function(e) {
      pages[e.id] = e.offsetTop
    })

    window.onscroll = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      for (p in pages) {
        if (pages[p] <= scrollPosition) {
          const el = document.getElementById('sidebar-' + p)
          var els = document.querySelectorAll('.active')
          for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('active')
          }
          el.className += ' active'
          this.currentPage = p
        }
      }
    }
  },
  methods: {
    onScroll(e) {
      console.log(e)
    }
  }
}
</script>
