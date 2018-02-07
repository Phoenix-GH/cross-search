<template>
  <BaseInput
    placeholder="Search query"
    class="Input--search"
    :handleOnEnterPress="handleOnEnterPress"
    :type="type"
  />

</template>

<script>
import BaseInput from './Base';

export default {
  components: {
    BaseInput,
  },
  props: ['handleOnEnterPress', 'type'],
};
</script>

<style lang="stylus" scoped>
.Input--search
  width 100%
</style>
