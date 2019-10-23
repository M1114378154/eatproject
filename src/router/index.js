import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '../views/Log.vue'
import Register from '@/components/Register'
import Category from '@/components/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
   {
    path: '/log',
    name: 'log',
   component:Log
   },
   {
    path: '/register',
    name: 'register',
   component:Register
   },
   {
    path: '/category',
    name: 'category',
   component:Category
   },
  ]
})
