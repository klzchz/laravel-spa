<template>
    <div>
        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link class="nav-link " :to="{name:'admin.dashboard'}">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'admin.categories'}">Categories <span class="badge badge-info">({{totalCategories}})</span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'admin.products'}">Produtos</router-link>
            </li>
        </ul>
        <div class="container">
            <router-view></router-view>

        </div>

    </div>
</template>
<script>
export default {
    computed: {
        totalCategories()
        {
            return this.$store.state.categories.items.data.length;
        }
    },
}
</script>

<style  scoped>

</style>
