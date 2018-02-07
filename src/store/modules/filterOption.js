

import * as types from '../mutation-types';

const state = {
  filter: {
    optionName: 'All years',
    datePickerVisible: false,
    selectedDate: null,
    variants: {
      'Periodicals': false,
      'e-Books': false,
      'World News Connections': false,
    },
    sortBy: {
      Relevance: true,
      Date: false,
      Author: false,
    },
  },
  keyword: '',
};
const getters = {
  currentState: state => state.filter,
  keyword: state => state.keyword,
  filterDate: state => state.filter.selectedDate,
  filterOptionName: state => state.filter.optionName,
  filterDatePickerVisibility: state => state.filter.datePickerVisible,
  variantsDataToRender: state => state.filter.variants,
  sortByDataToRender: state => state.filter.sortBy,
};
const actions = {
  setFilter({ commit }, filterData) {
    commit(types.SET_FILTER, filterData);
  },
  changeDatePickerVisibility({ commit }, bool) {
    commit(types.SET_DATE_PICKER_VISIBILITY, bool);
  },
  setDate({ commit }, date) {
    commit(types.SET_DATE, date);
  },
  updateKeyword({ commit }, keyword) {
    commit(types.SET_KEYWORD, keyword);
  },
  setFilterOptionName({ commit }, name) {
    commit(types.SET_OPTION_NAME, name);
  },
  setVariants({ commit }, data) {
    commit(types.SET_VARIANTS, data);
  },
  setSortBy({ commit }, data) {
    commit(types.SET_SORT_BY, data);
  },
};
const mutations = {
  [types.SET_FILTER](state, data) {
    state.filter = data;
  },
  [types.SET_DATE](state, date) {
    state.filter.selectedDate = date;
  },
  [types.SET_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
  [types.SET_DATE_PICKER_VISIBILITY](state, bool) {
    state.filter.datePickerVisible = bool;
  },
  [types.SET_OPTION_NAME](state, name) {
    state.filter.optionName = name;
  },
  [types.SET_VARIANTS](state, data) {
    state.filter.variants = data;
  },
  [types.SET_SORT_BY](state, data) {
    state.filter.sortBy = data;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
