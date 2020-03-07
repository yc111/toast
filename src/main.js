import Vue from 'vue';
import App from './App.vue';
import toast from './components/index';
import 'amfe-flexible';
import './directives/highlight';

Vue.use(toast);
Vue.prototype.$bus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
