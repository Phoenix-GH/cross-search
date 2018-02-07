<template>
    <div class="u-posRelative DateFilter-list u-bgc--pale-grey" v-if="visibility">
      <slot />
      <v-icon
        class="u-posAbsolute u-color--warm-grey DateFilter-close"
        @click="handleCloseClick"
      >close</v-icon>
    </div>
</template>

<script>
export default {
  computed: {
    visibility() {
      return this.$parent.isOpen;
    },
  },
  methods: {
    handleCloseClick() {
      if (this.$parent.isOpen) {
        this.$parent.toggleVisibility();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.DateFilter-list
  border none
  padding 12px 24px
  box-sizing content-box
.DateFilter-close
  top 12px
  right 8px
  cursor pointer
  font-size 20px !important
  &:hover
    color colors['lipstick'];
</style>
