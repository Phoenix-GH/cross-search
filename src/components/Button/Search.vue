<template>
  <BaseButton class="Button--search" :type="type">
    <v-icon
      class="u-color--real-white-important"
    >search</v-icon>
  </BaseButton>
</template>

<script>
import BaseButton from './Base';

export default {
  components: {
    BaseButton,
  },
  props: ['type'],
};
</script>

<style lang="stylus" scoped>
.Button--search
  width 64px
</style>
