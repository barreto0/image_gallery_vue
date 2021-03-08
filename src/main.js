import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource'; // modulo de consumo de api

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
