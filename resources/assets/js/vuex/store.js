import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'
import Preloader from './modules/preloader/preloader'
import Products from './modules/products/products';


Vue.use(Vuex);

const store = new Vuex.Store({

    modules:{
        categories: Categories,
        preloader: Preloader,
        products: Products,

    }

})

export default store;

