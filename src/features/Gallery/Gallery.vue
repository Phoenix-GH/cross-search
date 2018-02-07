<template>
  <Layout>
    <Item
      v-for="(item, index) in ui"
      :key="index"
      :name="item.name"
      :image="item.image"
    />
  </Layout>
</template>

<script>
import Layout from './Layout';
import Item from './Item';

export default {
  components: {
    Layout,
    Item,
  },
  data() {
    return {
      ui: {},
    };
  },
  mounted() {
    this.ui = [
      {
        name: 'Periodicals',
        image: 'https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev661df3f628ce819a8306ca96aa6bc36f.jpg',
      },
      {
        name: 'e-Books',
        image: 'https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev661df3f628ce819a8306ca96aa6bc36f.jpg',
      },
      {
        name: 'World News Connections',
        image: 'https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev661df3f628ce819a8306ca96aa6bc36f.jpg',
      },
    ];
  },
};
</script>
