<template>
  <v-app>
    
    <sidebar/>
    <v-content>
      <browser-detect/>
      <nuxt />
      
    </v-content>
   
  </v-app>
</template>

<script>
import config from '@/config'
import Sidebar from '@/components/Sidebar'
import { EventBus } from '@/event-bus.js'
import BrowserDetect from '@/Components/BrowserDetect'
export default {
  name: 'App',
  components: {
    Sidebar,
    BrowserDetect
  },
  data() {
    return {
      currentPage: null
    }
  },
  computed: {},
  watch: {
    currentPage(newValue, oldValue) {
      EventBus.$emit('pageUpdate', newValue)
    }
  },

  mounted() {
    console.log(this.$browserDetect)
    /**
     * Get all pages in window ...
     */
    let page = document.querySelectorAll('.page')
    let pages = {}
    let p = 0
    let offset = 0
    /**
     * ... determine offset ...
     */
    Array.prototype.forEach.call(page, function(e) {
      pages[e.id] = e.offsetTop
    })

    window.onscroll = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      for (p in pages) {
        if (pages[p] <= scrollPosition) {
          /**
           * ... then add 'active' class to current section ...
           */
          const el = document.getElementById('sidebar-' + p)
          var els = document.querySelectorAll('.active')
          /**
           * ... and remove .active from all other sections.
           */
          for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('active')
          }
          el.className += ' active'
          this.currentPage = p
        }
      }
    }
  },
  methods: {}
}
</script>
