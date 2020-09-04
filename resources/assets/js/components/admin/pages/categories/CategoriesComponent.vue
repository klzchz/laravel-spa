<template>
    <div>
        <h1>Listagem de Categorias</h1>
        
        <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="100">Acões</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category,index) in categories.data" :key="index">
                    <td v-text="category.id"></td>
                    <td v-text="category.name"></td>
                    <td>
                        <router-link  class="btn btn-info" :to="{name:'admin.categories.edit',params:{id:category.id}}">Editar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('loadCategories');
    },
    computed: {
        categories(){
            return  this.$store.state.categories.items;;
        }
    },
    
}
</script>