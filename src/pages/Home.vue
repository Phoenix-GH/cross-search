<template>
  <div class="u-containerDistance--standard2x u-containerSmall u-containerCenter">
    <SearchBox />
    <Gallery class="u-containerDistance--standard" />
    <DateFilter />
  </div>
</template>

<script>
import SearchBox from '@/features/SearchBox';
import Gallery from '@/features/Gallery';
import DateFilter from '@/features/DateFilter';

export default {
  components: {
    SearchBox,
    Gallery,
    DateFilter,
  },
};
</script>
