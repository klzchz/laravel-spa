<template>
    <div>
        <h1>Editar Categoria</h1>
         <small><router-link :to="{name:'admin.categories'}">Voltar</router-link></small>
           <form class="form" @submit.prevent="submitForm()">
            <div class="form-group">
                <input type="text" v-model="category.name" class="form-control" placeholder="Nome da Categoria">
            </div>
            
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>
<script>
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
    data() {
        return {
            category:{

            }
        }
    },
}
</script>
<style scoped>
    
</style>