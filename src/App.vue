<template>
  <div class="App">
    <Header_ />
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import Header_ from '@/features/Header';

export default {
  components: {
    Header_,
  },
};
</script>

<style lang="stylus">

@import '~vuetify/src/stylus/main';
@import './styles/suitcss/index.css';
@import './styles/utils'
@import url('https://fonts.googleapis.com/css?family=Roboto');

.App
  height 100vh
  width 100%
  padding-top 24px
  background-image linear-gradient(-180deg, #EAEAEA 0%, #FFFFFF 72%)
body
  font-family: 'Roboto', sans-serif;
.menu__content > .card
  backface-visibility: visible;
.input-group
  padding-top: 9px;
</style>
