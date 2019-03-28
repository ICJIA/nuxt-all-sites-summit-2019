<template>
  <div >
   
    <sidebar-icon/>
    <test/>
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
import Test from '@/components/Test'

export default {
  components: {
    BasePage,
    SidebarIcon,
    Test
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
