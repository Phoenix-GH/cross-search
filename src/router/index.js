import Vue from 'vue';
import VueRouter from 'vue-router';

const App = () => import('@/App');
const Home = () => import('@/pages/Home');
const Login = () => import('@/pages/Login');
const SearchResult = () => import('@/pages/SearchResult');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: App,
      children: [
        {
          path: '',
          name: 'App',
          component: Home,
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        },
        {
          path: '/search-result',
          name: 'SearchResult',
          component: SearchResult,
        },
      ],
    },
  ],
});

export default router;
