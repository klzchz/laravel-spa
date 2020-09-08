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
         this.$store.dispatch('loadCategory',this.id)
                .then(response => {
                    console.log(response);
                    this.category = response;
                })
                .catch(error =>{

                });
    },
    data()
    {
        return{
            category:{}
        }
    },
    components:{
        formCat:FormCategoryComponent
    }
}
</script>
<style scoped>
    
</style>