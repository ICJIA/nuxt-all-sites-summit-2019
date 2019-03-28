<template>
  <div >
   
    <sidebar-icon/>
   
    <base-page 
      v-for="(page, index) in pages" 
      :key="index" 
      :page="page"/>
  </div>
</template>

<script>
import BasePage from '@/components/BasePage'
import SidebarIcon from '@/components/SidebarIcon'
import pages from '@/manifest.json'

export default {
  components: {
    BasePage,
    SidebarIcon
  },
  data() {
    return {
      pages
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style>
.full-width {
  margin: 0;
  padding: 0;
}
</style>
