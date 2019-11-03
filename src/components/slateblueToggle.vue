<template>
  <div class="custom-control custom-switch">
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('toggle', $event.target.checked)"
      class="custom-control-input"
    />
    <label class="custom-control-label"></label>
    <!-- <label class="custom-control-label">Toggle this switch element</label> -->
  </div>
</template>

<script>
export default {
  name: "slateblueToggle",
  model: {
    prop: "checked",
    event: "toggle"
  },
  props: {
    checked: Boolean
  }
};
</script>

<style lang="scss" scoped>
</style>