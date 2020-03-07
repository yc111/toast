import Vue from 'vue';
import App from './App.vue';
import toast from './components/index';
import 'amfe-flexible';

Vue.use(toast);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
