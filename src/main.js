// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import { Cell } from 'mint-ui';//标题文字带链接（如：>更多）


Vue.prototype.$video = Video
Vue.component(Cell.name, Cell);//标题文字带链接（如：>更多）
Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
