import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import http from './http'

Vue.prototype.$http = http
Vue.config.productionTip = false

// Vue.mixin({
//   methods: {
//     getAuthHeader() {
//       return {
//         Authorization: `Bearer ${sessionStorage.token || ''}`
//       }
//     }
//   }
// })

// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  methods: {
    getAuthHeader() {
      return {
        Authorization: `Bearer ${sessionStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
