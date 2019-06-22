import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

Vue.config.productionTip = false
App.use(VueRouter)
App.use(VueAxios, axios)

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
