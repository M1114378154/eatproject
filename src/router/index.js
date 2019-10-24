import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '../views/Log.vue'
import Register from '@/components/Register'

import MyGroup from '@/components/Mygroup'
import Hotfood from '@/components/Hotfood'
import Foodstrategy from '@/components/Foodstrategy'
import Deliciousarea from '@/components/Deliciousarea'



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
      path: '/Hotfood',
      name: 'Hotfood',
      component: Hotfood
    },
    {
      path: '/Foodstrategy',
      name: 'Foodstrategy',
      component: Foodstrategy
    },
    {
      path: '/Deliciousarea',
      name: 'Deliciousarea',
      component: Deliciousarea
    },
  ]
})
