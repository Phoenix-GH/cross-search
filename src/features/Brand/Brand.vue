<template>
  <div class="u-flex u-flexAlignItemsCenter Brand">
    <Logo />
    <Textt />
  </div>
</template>

<script>
import Logo from './Logo';
import Textt from './Text';

export default {
  components: {
    Logo,
    Textt,
  },
};
</script>

<style lang="stylus" scoped>
.Brand
  width auto
</style>
