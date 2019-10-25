import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '../views/Log.vue'
import Register from '@/components/Register'
import MyGroup from '@/components/Mygroup'
import Category from '@/components/Category'
import Gambit from '@/components/Gambit'
import VideoGroup from '@/components/VideoGroup'
import Hotfood from '@/components/Hotfood'
import Foodstrategy from '@/components/Foodstrategy'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //登录
    {
      path: '/log',
      name: 'log',
      component: Log
    },
    //注册账号
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    //我的个人中心
    {
      path: '/MyGroup',
      name: 'MyGroup',
      component: MyGroup
    },
    //首页分类
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    //好吃话题区
    {
      path: '/gambit',
      name: 'gambit',
      component: Gambit
    },

    //话题视频区
    {
      path: '/VideoGroup',
      name: 'VideoGroup',
      component: VideoGroup
    },
      //热门好吃推荐
      {
        path: '/Hotfood',
        name: 'Hotfood',
        component: Hotfood
      },
        //美食攻略
    {
      path: '/Foodstrategy',
      name: 'Foodstrategy',
      component: Foodstrategy
    },

  ]
})
