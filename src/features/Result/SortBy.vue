<template>
  <div>
    <span class="SearchResultOptions-sortByLabel">Sort By:</span>
    <div
      class="SearchResultOptions-checkboxWrapper"
      v-for="(checked, name) in dataToRender"
    >
      <Radio v-if="isInput('radio')"
        :name="name"
        inputName="sortSelector"
      />
    </div>
  </div>
</template>

<script>
import Radio from '@/components/Radio';
import InputGroup from '@/helpers/InputGroup';
import { mapGetters } from 'vuex';

export default {
  components: {
    Radio,
  },
  extends: InputGroup,
  props: {
    data: {
      default() {
        return this.dataToRender;
      },
    },
    type: {
      default() {
        return 'radio';
      },
    },
    onChange: {
      default() {
        return (data) => {
          this.$store.dispatch('setSortBy', data);
        };
      },
    },
  },
  computed: {
    ...mapGetters({
      dataToRender: 'sortByDataToRender',
    }),
  },
};
</script>
