/**
 * Created by aleksei on 5/11/17.
 */
import Vue from 'vue';

const API_URL = 'http://127.0.0.1:5000/';
const LOGIN_URL = `${API_URL}login`;
const LOGOUT_URL = `${API_URL}logout`;

export default {
  login(credentials, successCb, errorCb) {
    Vue.http.post(LOGIN_URL, credentials, (authData) => {
      localStorage.setItem('id_token', authData.id_tocken);
      localStorage.setItem('access_token', authData.access_token);
      successCb(authData);
    }).error((error) => {
      errorCb(error);
    });
  },
  logout(successCb, errorCb) {
    Vue.http.post(LOGOUT_URL, () => {
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      successCb();
    }).error((error) => {
      errorCb(error);
    });
  },
};
