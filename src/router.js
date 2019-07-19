import routerVue from 'vue-router'
import home from "./components/tab/home.vue"
import message from "./components/tab/message.vue"
import outher from "./components/tab/outher.vue"
import setting from "./components/tab/setting.vue"
var router = new routerVue({
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/outher",component:outher},
    {path:"/message",component:message},
    {path:"/setting",component:setting}
  ],
  linkActiveClass:"mui-active"
})
export default router