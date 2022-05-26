import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export interface RootState {
  userInfo?: object
}

export default new Vuex.Store({
  modules: {
    user
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
