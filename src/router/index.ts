import Vue, { Component } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { BasicLayout } from '../layouts'

Vue.use(VueRouter)

const RouteView: Component = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
