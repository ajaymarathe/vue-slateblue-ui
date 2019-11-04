<template>
  <nav :class="'navbar navbar-expand-lg navbar-light'+'bg-'+color">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "slateblueNavbar",
  props:{
      color:String,
  }
};
</script>

<style lang="scss" scoped>
</style>