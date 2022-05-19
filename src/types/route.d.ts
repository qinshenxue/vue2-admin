export {}

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 标题
    title?: string
    // 导航级别
    nav?: boolean
  }

  interface RouteRecordPublic {
    parent?: RouteRecordPublic
  }
}
