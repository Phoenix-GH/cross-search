<template>
  <BaseInput
    placeholder="Password"
    type="password"
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
