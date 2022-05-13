import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntVue from '@qinsx/ant-design-vue'
import '@qinsx/ant-design-vue/dist/antd.css'
import '@/assets/style.less'

Vue.config.productionTip = false
Vue.use(AntVue)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
