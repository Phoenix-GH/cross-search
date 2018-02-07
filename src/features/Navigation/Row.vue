<template>
  <div
    class="u-flex Navigation-row"
    :class="{'Navigation-row--leftSpace': right !== undefined}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ['right'],
};
</script>

<style lang="stylus" scoped>
.Navigation-row
  &--leftSpace
    margin-left 30px
</style>
