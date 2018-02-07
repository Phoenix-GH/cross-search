<template>
  <span
    class="
    u-uppercase
    u-curPointer
    u-color--brownish-grey
    u-fontLighter
    Navigation-item
    Navigation-item--leftSpace"
    :class="{isActive: active !== undefined}"
  >{{name}}</span>
</template>

<script>
export default {
  props: ['name', 'active'],
};
</script>

<style lang="stylus">
@import '../../styles/color-palette'
.Navigation-item
  font-size 12px
  &--leftSpace:not(:first-child)
    margin-left 10px
  &.isActive {
    color colors['warm-grey'];
  }
</style>
