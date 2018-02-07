<template>
  <Layout>
    <SearchInput
      :handleOnEnterPress="handleSubmit"
      :type="type"
    />
    <SearchButton
      @click.native="handleSubmit"
       :type="type"
    />
  </Layout>
</template>

<script>
import SearchInput from '@/components/Input/Search';
import SearchButton from '@/components/Button/Search';
import Layout from './Layout';

export default {
  props: {
    type: {
      default() {
        return 'home';
      },
    },
  },
  data() {
    return {
      keyword: '',
    };
  },
  components: {
    Layout,
    SearchInput,
    SearchButton,
  },
  methods: {
    handleSubmit() {
      const keyword = this.$store.state.keyword;
      if (this.type === 'result') {
        this.$parent.$parent.getResult(keyword);
      } else {
        this.$router.push({
          name: 'SearchResult',
        });
      }
    },
  },
};
</script>