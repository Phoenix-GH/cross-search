<template>
  <div class="SearchResult">
    <div class="SearchResult-searchOptions">
      <div class="SearchResult-options">
        <SearchResultOptions />
      </div>
      <div class="SearchResult-data">
        <SearchResultItem v-if='result'
          v-for="(item, index) in result.documents"
          v-bind:key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchResultOptions from '@/features/Result/ResultOptions';
import SearchResultItem from '@/features/Result/Item';
import API from '@/api/auth';

export default {
  mounted() {
    this.getResult(this.$store.state.keyword);
  },
  components: {
    SearchResultOptions,
    SearchResultItem,
    API,
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
  },
  methods: {
    getResult(keyword) {
      /* Getting data from API */
      this.$store.dispatch('getResult', keyword).then(() => {
      });
    },
    filterDate(startDate = null, endDate = null) {
      this.$store.dispatch('filterDate', startDate, endDate). then(() => {
      });
    },
  },
};
</script>

<style scoped>
.SearchResult {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}
.SearchResult-separator {
  width: 100%;
	height: 3px;
	border-style: solid;
	border-width: 1px;
	border-image-source: radial-gradient(circle at 50% 0, #ffffff, rgba(255, 255, 255, 0.4));
	border-image-slice: 1;
}
.SearchResult-searchOptions {
  margin-top: 36px;
}
.SearchResult-options {
  /* width: 50%; */
}
</style>

