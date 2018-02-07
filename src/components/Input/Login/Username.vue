<template>
  <BaseInput
    placeholder="Username"
    :handleOnEnterPress="handleOnEnterPress"
  />
</template>

<script>
import BaseInput from '../Base';

export default {
  components: {
    BaseInput,
  },
  props: ['handleOnEnterPress'],
};
</script>
