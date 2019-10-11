import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/common.scss';
import 'toastr/toastr.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

