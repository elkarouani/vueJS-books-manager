import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import NProgress from '../node_modules/nprogress/nprogress'

Vue.config.productionTip = false
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
  store,
  router,
  render: h => h(App)
}).$mount('#app')
