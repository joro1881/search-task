import './bootstrap';
// import router from './routers/app_router';
import Vue from 'vue';
import SearchEmployee from './components/search-employee';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.component('search-employee', SearchEmployee);

const app = new Vue({
    el: '#app',
});
