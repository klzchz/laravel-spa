require('./bootstrap');

window.Vue = require('vue');

import router from './routes/router';
import store from './vuex/store';

/*
    Componentes Globais
    Vue.component('example-component', require('./components/ExampleComponent.vue'));
*/
Vue.component('admin-component', require('./components/admin/AdminComponent.vue'));
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',
    
});
