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
export default {
  name: 'App',
  components: {
    Sidebar
  },
  mounted() {
    let page = document.querySelectorAll('.page')
    let pages = {}
    let p = 0
    let offset = 0

    Array.prototype.forEach.call(page, function(e) {
      pages[e.id] = e.offsetTop
    })
    window.onscroll = function() {
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
