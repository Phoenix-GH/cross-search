<template>
  <v-btn
    class="
      Button
      u-bgc--lipstick-important
      u-color--real-white-important
      u-fontLighter
      u-curPointer
      Button
    "
     :class="{'button-result' : type == 'result', 'Button': type != 'result'}"
  >
    <span v-if="text">{{text}}</span>
    <slot v-else />
  </v-btn>
</template>

<script>
export default {
  props: ['text', 'type'],
};
</script>

<style lang="stylus" scoped>
.Button
  margin 0
  font-size 28px
  height 64px
  outline none !important
  border none
.button-result
  min-width 0
  margin 0
  font-size 28px
  height 34px
  width 34px
  outline none !important
  border none
  padding 0
</style>
