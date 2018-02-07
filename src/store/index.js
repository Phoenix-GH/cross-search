/**
 * Created by aleksei on 5/10/17.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import * as getters from './getters';
import auth from './modules/auth';
import filterOptions from './modules/filterOption';
import json from '../pages/search-result-example.json';

const API_URL = 'https://search.eastview.com/rest/api/';
const SEARCH_URL = `${API_URL}search/basic`;
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {
    result: {},
    keyword: '',
  },
  mutations: {
    updateResult(state, payload) {
      state.result = payload;
    },
    updateKeyword(state, payload) {
      state.keyword = payload;
    },
  },
  actions: {
    getResult(context, keyword) {
      let url = SEARCH_URL;
      if (keyword) {
        url = `${SEARCH_URL}?term=${keyword}`;
      }
      return new Promise(() => {
        Vue.http.get(url).then((response) => {
          context.commit('updateResult', response.data);
        }, () => {
          context.commit('updateResult', json);
        });
      });
    },
    updateKeyword(context, keyword) {
      context.commit('updateKeyword', keyword);
    },
    filterDate(context, startDate, endDate) {
      let url = SEARCH_URL;
      if (startDate) {
        const fromYear = startDate.split('-')[0];
        const fromMonth = startDate.split('-')[1];
        const fromDay = startDate.split('-')[2];
        url = `${url}?fromYear=${fromYear}&&fromMonth=${fromMonth}&&fromDay=${fromDay}`;
      }
      if (endDate) {
        const toYear = endDate.split('-')[0];
        const toMonth = endDate.split('-')[1];
        const toDay = endDate.split('-')[2];
        url = `${url}&&toYear=${toYear}&&toMonth=${toMonth}&&toDay=${toDay}`;
      }
      return new Promise(() => {
        Vue.http.get(url).then((response) => {
          context.commit('updateResult', response.data);
        }, () => {
          context.commit('updateResult', json);
        });
      });
    },
  },
  // getters,
  modules: {
    auth,
    filterOptions,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
