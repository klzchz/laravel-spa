<template>
    <div>
        <h1>Editar Categoria</h1>
        <form-cat 
            :category="category"
            :updating="true">
        </form-cat>
    </div>
</template>
<script>

import FormCategoryComponent from './partials/FormCateogoryComponent'
export default {
    props:{
        id:{
            require:true
        }
        
    },
    created() {
        this.loadCategory();
        
         
    },
    data()
    {
        return{
            category:{}
        }
    },
    components:{
        formCat:FormCategoryComponent
    },
    methods:{
        loadCategory()
        {
            this.$store.dispatch('loadCategory',this.id)
                .then(response => {
                    console.log(response);
                    this.category = response;
                })
                .catch(error =>{
                    if(error.response.status == 404)
                    {
                        this.$snotify.error('Categoria não foi encontrada','404')
                        this.$router.push({name:'admin.categories'})
                    }
                });
        }
    }
}
</script>
<style scoped>
    
</style>