<template>
    <div>
          <small><router-link :to="{name:'admin.categories'}">Voltar</router-link></small>
          <div :class="['form-group',{'has-error':errors.name}]">
              <div v-if="errors.name">{{errors.name[0]}}</div>
          </div>
        <form class="form" @submit.prevent="onSubmit()">
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
        category:{
            require:false,
            type: Object|Array,
            default:() =>{
                return {
                    name:'',
                }
            }
            
        },
        updating:{
            require:false,
            type:Boolean,
            default:false,
        }
    }, 
    methods: {
        onSubmit()
        {   
            const  action  = this.updating ? 'updateCategory' : 'storeCategory';
             this.$store.dispatch(action,this.category)
                        .then(()=> this.$router.push({name:'admin.categories'}))
                        .catch((error)=>{

                            this.errors =  error.response.data.errors;
                            console.log(error.response.data.errors);
                          
                        })
        },

    },

    data()
    {
        return {
            errors:{},
        }
    }
}
</script>
<style scoped>
 .has-error{
     color:red;
 }
 .has-error input{border:1px solid red;}
</style>