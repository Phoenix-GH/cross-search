<template>
  <label class="Label">
    <input
      type="checkbox"
      class="Checkbox"
      :class="checkboxClasses"
    />
    <span class="Name">{{name}}</span>
  </label>
</template>

<script>
export default {
  props: ['name', 'checkboxClasses'],
};
</script>

<style lang="stylus" scoped>
.Checkbox
  border 1px solid #979797
  width 15px
  height 15px
  -webkit-appearance none
  -moz-appearance none
  outline none
  vertical-align bottom
  cursor pointer
  background-color #FFF

.Checkbox:checked::after {
  content '\2713'
  color #5ab400
  width 100%
  height 100%
  font-size 16px
  font-weight bold
  text-align 'center'
  display flex
  justify-content center
  align-items center
}

.Label
  display flex
  align-items center
  cursor pointer

.Name
  margin-left 5px
</style>
