<template>
  <button
    type="button"
    class="
      DateFilter-button
      u-color--brownish-grey
      u-curPointer"
    @click="handleClick"
    v-if="visible"
  >
    <div class="u-flex u-flexJustifyBetween">
      {{value}}
      <v-icon class="DateFilter-icon">keyboard_arrow_down</v-icon>
    </div>
  </button>
</template>

<script>
export default {
  computed: {
    visible() {
      return !this.$parent.isOpen;
    },
    value() {
      return this.$parent.selected;
    },
  },
  methods: {
    handleClick() {
      this.$parent.toggleVisibility();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.DateFilter-button
  font-size 16px
  padding 6px 20px 0
  height 32px
  margin 0
  width auto
  outline none !important
  line-height normal

.DateFilter:hover .DateFilter-button
  color colors['lipstick']
.DateFilter-icon
  padding-left 14px
  margin-top -1px
</style>
