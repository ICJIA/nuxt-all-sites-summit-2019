<template>
  <div>
    <sidebar-icon/>
    <base-page 
      v-for="(page, index) in config.pages" 
      :key="index" 
      :page="page"/>
  </div>
</template>

<script>
import config from '@/config'
import BasePage from '@/components/BasePage'
import SidebarIcon from '@/components/SidebarIcon'

export default {
  components: {
    BasePage,
    SidebarIcon
  },
  data() {
    return {
      config
    }
  },
  methods: {}
}
</script>

<style>
.full-width {
  margin: 0;
  padding: 0;
}
</style>
