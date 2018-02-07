/**
 * Created by aleksei on 5/11/17.
 */
import auth from '@/api/auth';
import router from '@/router';
import * as types from '../mutation-types';
// initial state
// shape: [{ id, quantity }]\

const defaultState = {
  authRequest: false,
  user: {
    authenticated: false,
  },
};

// getters
const getters = {
  user: state => state.user,
};

// actions
const actions = {
  login({ commit }, credentials) {
    commit(types.AUTH_REQUEST);
    auth.login(
      credentials,
      (authData) => { commit(types.AUTH_SUCCESS, authData); },
      () => commit(types.AUTH_FAILURE),
    );
  },
  logout({ commit }) {
    commit(types.AUTH_REQUEST);
    auth.logout(
      () => {
        commit(types.AUTH_FAILURE);
        router.go('/login');
      },
      (error) => {
        commit(types.AUTH_FAILURE, error);
      },
    );
  },
};

// mutations
const mutations = {
  [types.AUTH_REQUEST](state) {
    // clear cart
    state.authRequest = true;
  },

  [types.AUTH_SUCCESS](state, { name, organization, ip }) {
    state.authRequest = false;
    state.user = {
      authenticated: true,
      name,
      organization,
      ip,
    };
  },

  [types.AUTH_FAILURE](state, { error = null }) {
    state.authRequest = false;
    state.user = defaultState;
    state.error = error;
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
