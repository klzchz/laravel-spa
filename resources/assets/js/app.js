require('./bootstrap');

window.Vue = require('vue');

import router from './routes/router';
import store from './vuex/store';

/*
    Componentes Globais
    Vue.component('example-component', require('./components/ExampleComponent.vue'));
*/
Vue.component('test-component', require('./components/TestComponent.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',
    
});
