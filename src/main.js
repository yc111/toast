import Vue from 'vue';
import App from './App.vue';
import toast from './components/index';

Vue.use(toast);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
