import "./css/index.css"
import Vue from 'vue'
import app from './app.vue'

// mint-ui
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
// mui
import "./lib/mui/css/mui.css"

var vm= new Vue({
  el:"#app",
  render:c=>c(app)
})
