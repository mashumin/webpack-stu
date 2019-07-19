import "./css/index.css"
import Vue from 'vue'
import app from './app.vue'
// router 使用
import routerVue from 'vue-router'
Vue.use(routerVue);
import router from "./router.js"
// resource
import resource from "vue-resource"
Vue.use(resource)
// mint-ui
import 'mint-ui/lib/style.css'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// mui
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icon.css"

var vm= new Vue({
  el:"#app",
  render:c=>c(app),
  router
})
