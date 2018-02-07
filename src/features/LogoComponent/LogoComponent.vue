<template>
  <div class="Logo" />
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped lang="less">
  .Logo {
    width: 99.58px;
    height: 71px;
    background: url("/static/images/logo.png") no-repeat;
    background-size: cover;

    @media
    only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi) {
      background-image: url("/static/images/logo@2x.png");
    }

    @media
    only screen and (max-width: 600px) {
      margin: 0 auto 20px;
    }
    @media
    only screen and (min-width: 600px) {
      margin-right: 60px;
    }

  }
</style>
