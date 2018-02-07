<template>
  <label class="u-posRelative">
    <input
      type="text"
      class="
        u-color--brownish-grey
        u-bgc--real-white
        u-bc--white
      "
      :class="{'input-result' : type == 'result', 'Input': type != 'result'}"
      :placeholder="placeholder"
      v-on:keyup.13="handleOnEnterPress"
      required
      v-model="value"
      @change="enter"
    />
    <span
      class="
        u-color--warm-grey
        u-fontLighter
        u-posAbsolute
        u-hidden"
        :class="{'placeholder-result' : type == 'result', 'Placeholder': type != 'result'}"
      >{{placeholder}}</span>
  </label>
</template>

<script>
export default {
  props: ['placeholder', 'type', 'handleOnEnterPress'],
  data: () => ({
    value: '',
  }),
  methods: {
    enter() {
      this.$store.dispatch('updateKeyword', this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.Input
  height 64px
  width 100%
  border-width 1px
  border-style solid
  outline none
  padding 20px
  font-size 24px
  &::-webkit-input-placeholder
    color colors['pinkish-grey'];
  &:valid
    padding 25px 20px 15px
    & ~ .Placeholder
      display block !important

.Placeholder
  top 8px
  left 20px
  z-index 999
  font-size 12px

.input-result
  height 34px
  width 100%
  border-width 1px
  border-style solid
  outline none
  font-size 24px
  &::-webkit-input-placeholder
    color colors['pinkish-grey'];
  &:valid
    padding 15px 20px 15px
    & ~ .Placeholder
      display block !important

.placeholder-result
  display none

</style>
