<template>
  <div class="Header">
    <div class="
      u-flex
      u-containerMedium
      u-containerCenter
    ">
      <slot />
    </div>
    <div class="
      u-flex
      u-containerMedium
      u-containerCenter
    ">
      <Line_ />
    </div>
  </div>
</template>

<script>
import Line_ from './Line';

export default {
  components: {
    Line_,
  },
};
</script>
