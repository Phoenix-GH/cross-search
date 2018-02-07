<template>
  <div>
    <div
      class="SearchResultOptions-checkboxWrapper"
      v-for="(checked, name) in dataToRender"
    >
      <div class="BlockShouldRename-cell">
        <Checkbox v-if="isInput('checkbox')"
          :name="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox';
import InputGroup from '@/helpers/InputGroup';
import { mapGetters } from 'vuex';

export default {
  components: {
    Checkbox,
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
        return 'checkbox';
      },
    },
    onChange: {
      default() {
        return (data) => {
          this.$store.dispatch('setVariants', data);
        };
      },
    },
  },
  computed: {
    ...mapGetters({
      dataToRender: 'variantsDataToRender',
    }),
  },
};
</script>

<style lang="stylus">
.BlockShouldRename
  margin-top 10px

.BlockShouldRename-cell:not(:first-child)
  margin-left 40px

.BlockShouldRename-cell:not(:first-child).second
  margin-left 20px

</style>