<template>
  <BaseButton
    class="Button--login"
    text="Enter"
  />
</template>

<script>
import BaseButton from './Base';

export default {
  components: {
    BaseButton,
  },
};
</script>

<style lang="stylus" scoped>
.Button--login
  width 100%
</style>
