<template>
  <div class="SearchResultOptions" :class="{'isScrolled': scrolled}">
    <div class="SearchResultOptions-layout">
      <div class="SearchResultOptions-sticky">
        <v-layout row wrap>
          <v-flex xs12 sm2 lg2 class="SearchResultOptions-item--logo">
            <LogoComponent></LogoComponent>
          </v-flex>
          <v-flex xs12 sm12 lg12 class="header-row"
          >
            <v-layout row wrap>
              <v-flex xs12 sm6 lg8>
                <SearchBox
                  :value="initialKeyword"
                  type="result"
                />
              </v-flex>
              <v-flex xs12 sm6 lg4>
                <DateFilter/>
              </v-flex>
            <v-flex xs12 sm12 lg12>
              <SearchVariants
                class="SearchResultOptions-item SearchResultOptions-item--checkboxes"
              />
            </v-flex>
          </v-layout>
          </v-flex>
        </v-layout>
      </div>
      <SortBy
        class="SearchResultOptions-item SearchResultOptions-item--radios"
      />
    </div>
  </div>
</template>

<script>
import LogoComponent from '@/features/LogoComponent';
import DateFilter from '@/features/DateFilter';
import Layout from './Layout';
import SearchVariants from './Variants';
import SortBy from './SortBy';
import SearchBox from '../SearchBox';

export default {
  components: {
    SearchBox,
    DateFilter,
    Layout,
    LogoComponent,
    SearchVariants,
    SortBy,
  },
  computed: {
    initialKeyword() {
      return this.$route.query.keyword;
    },
  },
  data() {
    return {
      scrolled: false,
      nodes: [],
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset > 160;
    }, false);
  },
  methods: {
  },
};
</script>

<style lang="less" scroped>
.SearchResultOptions {
  position: relative;
  width: 100%;
  left: 0;
  top: 0;
  padding: 0;
  box-shadow: none;
  background-color: transparent;
  &.isScrolled  {
    .SearchResultOptions-sticky {
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 0px 2px 5px 0px rgba(214,214,214,1);
      padding: 30px 0 31px;
      background-color: #eaeaea;
      width: 100%;
      padding-left: 5%;
      padding-right: 5%;
      background-image: radial-gradient(circle at 57% 20%, rgba(255, 255, 255, 0.52), #eaeaea);
    }
    .SearchResultOptions-item--logo {
      display: block;
    }
    .header-row {
       @media
        only screen and (min-width: 600px) {
          max-width: 75%;
        }
    }
  }
}
.SearchResultOptions-layout {
  display: flex;
  margin: 0 auto;
  width: auto;
  flex-flow: row wrap;
}
.SearchResultOptions-sticky {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
.SearchResultOptions-item {
  flex: 0 0 50%;
}
.SearchResultOptions-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.SearchResultOptions-label span {
  margin-left: 5px;
}
.SearchResultOptions-item--checkboxes {
  flex: 0 0 100%;
  display: flex;
  margin-left: 0;
}
.SearchResultOptions-item--radios {
  flex: 0 0 100%;
  display: flex;
  margin-top: 46px;
  display: flex;
  align-items: center;
}
.SearchResultOptions-sortByLabel {
  font-size: 14px;
  margin-right: 16px;
}
.SearchResultOptions-item--logo {
  display: none;
}
.SearchResultOptions-item--searchBox {
  flex: 0 0 100%;
}
.SearchResultOptions-item--searchOption {
  flex: 1 0 23%;
  margin-left: 5%;
}
.SearchResultOptions-optionBox {
  // margin-left: 60px;
}
.SearchResultOptions-checkboxWrapper {
  flex: 0.04 0 auto;
}
</style>
