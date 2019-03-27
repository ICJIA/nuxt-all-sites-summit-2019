<template>
  <v-app >
    <sidebar/>
    <v-content>
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-content>
   
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  },
  mounted() {},
  methods: {}
}
</script>
