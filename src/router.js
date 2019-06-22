import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './views/Home.vue'
import Create from './views/Create.vue'
import Edit from './views/Edit.vue'
import Show from './views/Show.vue'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
  ]
})
