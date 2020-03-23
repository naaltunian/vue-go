import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store/index';
import About from './components/Pages/About.vue';
import UserList from './components/Users/UserList';
import User from './components/Users/User';

Vue.config.productionTip = false;

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/",
      component: UserList
    },
    {
      path: "/user/:id",
      component: User
    }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
