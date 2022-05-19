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
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '首页',
          nav: true
        }
      }
    ]
  },
  {
    path: '/list',
    component: BasicLayout,
    meta: {
      nav: true,
      title: '列表'
    },
    children: [
      {
        path: 'ListWithFilter',
        component: () => import('../views/list/ListWithFilter.vue'),
        meta: {
          nav: true,
          title: '列表带筛选'
        }
      },
      {
        path: 'ListWithIcon',
        component: () => import('../views/list/ListWithIcon.vue'),
        meta: {
          nav: true,
          title: '列表带图标'
        }
      }
    ]
  },
  {
    path: '/form',
    component: BasicLayout,
    meta: {
      nav: true,
      title: '表单'
    },
    children: [
      {
        path: 'ListWithForm',
        component: () => import('../views/list/ListWithFilter.vue'),
        meta: {
          nav: true,
          title: '列表带筛选'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
