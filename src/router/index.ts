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
    path: '/login',
    component: () => import('../views/user/Login.vue'),
    meta: {
      title: '登录'
    }
  },
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
        path: 'List',
        component: () => import('../views/list/List.vue'),
        meta: {
          nav: true,
          title: '普通列表'
        }
      },
      {
        path: 'ListWithFilter',
        component: () => import('../views/list/ListWithFilter.vue'),
        meta: {
          nav: true,
          title: '列表带筛选'
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
