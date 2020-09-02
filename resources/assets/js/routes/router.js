import Vue from 'vue'
 import VueRouter from 'vue-router'

 import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
 import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
 import AdminComponent from '../components/admin/AdminComponent'
 import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
 Vue.use(VueRouter)

 const routes = [
   {
      path:'/admin',
      component:AdminComponent,
      name:'admin',
      children:[
        
         {
            path:'',
            component:DashboardComponent,
            name:'admin.dashboard'
         },
         {
            path:'categories',
            component:CategoriesComponent,
            name:'admin.categories'
         },
         {
            path:'categories/create',
            component:AddCategoryComponent,
            name:'admin.categories.create'
         },
      ]
   },

   
   
  
 ];

 const router = new VueRouter({
    routes
 });

 export default router;