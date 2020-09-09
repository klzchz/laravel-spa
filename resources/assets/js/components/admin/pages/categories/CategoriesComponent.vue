<template>
    <div>
        <h1>Listagem de Categorias</h1>
        
        <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="200">Acões</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category,index) in categories.data" :key="index">
                    <td v-text="category.id"></td>
                    <td v-text="category.name"></td>
                    <td>
                        <router-link  class="btn btn-info" :to="{name:'admin.categories.edit',params:{id:category.id}}">Editar</router-link>
                        <button  class="btn btn-danger" @click.prevent="confirmDeleteCategory(category)" >Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    created(){
        this.loadCategories();
    },
    computed: {
        categories(){
            return  this.$store.state.categories.items;;
        }
    },
    methods: {
        loadCategories()
        {
            return this.$store.dispatch('loadCategories');
        },
        deleteCategory(category)
        {
            this.$store.dispatch('deleteCategory',category)
                    .then((response)=>{
                        this.loadCategories();
                        console.log(response);
                        this.$snotify.success(`Sucesso ao deletar a categoria:  ${category.name}`);
                        
                    })
                    .catch((error)=>{
                        console.log(error);
                        this.$snotify.error("Erro ao deletar a categoria ",'Falha');
                    })
            
        },
        confirmDeleteCategory(category)
        {
            this.$snotify.error(`Deseja realmente deletar a categoria: ${category.name} ?`,'Deletar?',{
                  timeout: 5000,
                  showProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                    buttons:[
                        {text:'Não',action: (value) => {this.$snotify.remove(value.id)}},
                        {
                            text:'Sim',action: (value) => {
                            this.deleteCategory(category) 
                        this.$snotify.remove(value.id)
                        }
                        },
                    ]
            });
        }
    },
    
}
</script>