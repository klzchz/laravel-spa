<template>
  <div>
      <form class="form form-inline" @submit.prevent="search()">
          <input @keyup="search()" type="text" v-model="filter"  placeholder="Pesquisar:" class="form-control  border-success mr-0 sm-2"/>
          <button type="submit" class="btn btn-outline-success form-control  ml-0">Search</button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            filter:'',
        }
    },
    methods: {
        search()
        {
            this.$emit('searchCategory',this.filter);
        }
    },
}
</script>

<style>

</style>>