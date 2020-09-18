import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import './plugins/element'
import './plugins/avue'
import router from './router'
import http from "@/http";
window.axios=http
Vue.config.productionTip = false
Vue.prototype.$axios=http
Vue.prototype.$http=http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')