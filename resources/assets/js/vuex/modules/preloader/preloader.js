export default {
    state:{
        preloader:{
            loading:false,
        }
    },
    mutations:{
        PRELOADER(state,status)
        {
            state.preloader.loading = status;
        }
    },
}