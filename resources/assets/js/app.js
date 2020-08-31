require('./bootstrap');

window.Vue = require('vue');

import router from './routes/router';
import store from './vuex/store';

/*
    Componentes Globais
    Vue.component('example-component', require('./components/ExampleComponent.vue'));
*/
Vue.component('app-component', require('./components/App.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',
    
});
