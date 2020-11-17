<template>
    <div>
        <h1>Listagem de Produtos</h1>
      <table class="table table-dark">
          <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th width="200">Ações</th>
          </tr>
          </thead>
        <tbody>
            <tr v-for="product in products.data.data" :key="product.id">
              <td></td>
              <td v-text="product.name"></td>
              <td>
                <a href="" class="btn btn-info">Editar</a>
                <a href="" class="btn btn-danger">Apagar</a>
              </td>
            </tr>
        </tbody>
      </table>
      <ul v-if="products.data.last_page > 1">
        <li   v-if="products.data.current_page > 1">
          <a href="" @click.prevent="loadProducts(products.data.current_page-1)">
            Anterior
          </a>
        </li>
        <li v-if="products.data.current_page < products.data.last_page">
          <a href="#" @click.prevent="loadProducts(products.data.current_page+1)">
            Próxima
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    created()
    {
      this.loadProducts(1);


    },
  computed :{
    products()
    {
      return this.$store.state.products.items;
    },
    params()
    {
      return {
        page:this.products.data.current_page,
      }
    }
  },
  methods:{
      loadProducts(page)
      {
          this.$store.dispatch('loadProducts',{...this.params,page});
      }
  }
}
</script>

<style scoped >

</style>