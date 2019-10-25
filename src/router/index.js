import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '../views/Log.vue'
import Register from '@/components/Register'

import MyGroup from '@/components/Mygroup'
import Category from '@/components/Category'
import Gambit from '@/components/Gambit'



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
      component: Log
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/MyGroup',
      name: 'MyGroup',
      component: MyGroup
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/gambit',
      name: 'gambit',
      component: Gambit
    },
  ]
})
