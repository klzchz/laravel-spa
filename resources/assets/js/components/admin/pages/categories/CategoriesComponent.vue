<template>
    <div>
        <h1>Listagem de Categorias</h1>
        <div class="row my-2 mb-2">
            <div class="col-8">
                <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>
            </div>
            <div class="col-4">
                <search-component @searchCategory="search"></search-component>
            </div>
        </div>
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
import SearchComponent from './partials/SearchComponent'
export default {
    created(){
        this.loadCategories();
    },
    data()
    {
        return {
            name:'',
        }
    },
    computed: {
        categories(){
            return  this.$store.state.categories.items;;
        }
    },
    methods: {
        loadCategories()
        {
             this.$store.dispatch('loadCategories',{name:this.name});
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
        },
        search(filter)
        {
            this.name = filter;
            this.loadCategories();
        }
    },
    components:{
        SearchComponent
    }
    
}
</script>