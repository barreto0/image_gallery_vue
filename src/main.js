import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource'; // modulo de consumo de api
import VueRouter from 'vue-router'; // modulo de roteamento da aplicação
import {routes} from './routes';
import './directives/Transform';

Vue.use(VueResource);
Vue.http.options.root = 'https://jsonplaceholder.typicode.com';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
