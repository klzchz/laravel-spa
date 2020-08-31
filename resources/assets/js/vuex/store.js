import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/category'


Vue.use(Vuex);

const store = new Vuex.Store({

    modules:{
        categories: Categories,

    }

})

export default store;

