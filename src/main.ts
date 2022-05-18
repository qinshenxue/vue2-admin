import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntVue from '@qinsx/ant-design-vue'
import '@qinsx/ant-design-vue/dist/antd.css'
import '@/assets/style.less'
import Request from './utils/request'
import Component from '@/components'

import '../mock/index'

Vue.config.productionTip = false
Vue.use(AntVue)
Vue.use(Request)
Vue.use(Component)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
