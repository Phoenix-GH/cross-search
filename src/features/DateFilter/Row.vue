<template lang="html">
  <div class="Grid DateFilter-row">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.DateFilter-row
  border-top 1px solid colors['real-white'];
  padding 12px 0 10px
  &:first-child
    border none
    padding-bottom 14px
    padding-top 0
</style>
