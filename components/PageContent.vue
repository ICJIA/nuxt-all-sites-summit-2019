<template>
  <div :class="{ 'text-xs-left': isAlignedLeft }">
    <slot name="header"/>

    <slot name="content"/>

    <slot name="debug"/>
  </div>
</template>

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {}
  },
  computed: {
    isAlignedLeft() {
      return this.alignment === 'left'
    }
  }
}
</script>


<style>
</style>
