<template>
    <div>
        <h2>Cadastrando Categoria</h2>
        <small><router-link :to="{name:'admin.categories'}">Voltar</router-link></small>
        <form action="">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome da Categoria">
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>