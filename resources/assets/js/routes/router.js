import Vue from 'vue'
 import VueRouter from 'vue-router'

 import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
 import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
 import AdminComponent from '../components/admin/AdminComponent'
 import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
 import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
 import ProductComponent from '../components/admin/pages/products/ProductComponent'
 
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
         {
          path:'categories/:id/edit'  ,
          component:EditCategoryComponent,
          name:'admin.categories.edit',
          props:true
         },
         {
            path:'products',
            component:ProductComponent,
            name:'admin.products',
         }
      ]
   },

   
   
  
 ];

 const router = new VueRouter({
    routes
 });

 export default router;