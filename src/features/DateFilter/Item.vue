<template>
  <div class="Grid-cell u-size1of3">
    <div
      class="u-color--brownish-grey u-inlineBlock DateFilter-item"
      :class="{isActive}"
      @click="handleClick"
    >
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    isActive() {
      return this.$parent.$parent.$parent.selected === this.name;
    },
  },
  methods: {
    handleClick() {
      this.$parent.$parent.$parent.selected = this.name;
      this.$parent.$parent.$parent.specifiedDate = this.name === 'Exact date';
      this.$parent.$parent.$parent.specifiedRange = this.name === 'Date range';
      if (this.name !== 'Exact Date' && this.name !== 'Date range') {
        this.$parent.$parent.$parent.filterByDate(this.name);
      }
      this.$parent.$parent.$parent.toggleVisibility();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.DateFilter-item
  font-size 16px
  transition all .3s ease
  cursor pointer
  &.isActive
    color colors['lipstick'];
  &:hover:not(.isActive)
    color darken(colors['brownish-grey'], 80%)
</style>
