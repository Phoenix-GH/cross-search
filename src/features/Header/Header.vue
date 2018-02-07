<template>
  <Layout>
    <Brand />
    <Navigation>
      <NavigationRow>
        <NavigationItem
          name="feedback"
        />
        <NavigationItem
          name="help"
        />
      </NavigationRow>
      <NavigationRow right>
        <NavigationItem
          name="ENGLISH"
          active
        />
        <NavigationItem
          name="РУССКИЙ"
        />
      </NavigationRow>
    </Navigation>
  </Layout>
</template>

<script>
  import Brand from '@/features/Brand';
  import Navigation, {
    Row as NavigationRow,
    Item as NavigationItem,
  } from '@/features/Navigation';
  import Layout from './Layout';

  export default {
    components: {
      Layout,
      Navigation,
      NavigationRow,
      NavigationItem,
      Brand,
    },
  };

</script>
