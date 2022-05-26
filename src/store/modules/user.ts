import { Module } from 'vuex'
import { RootState } from '../index'

interface State {
  accessToken?: string
}

const user: Module<State, RootState> = {
  state: {},

  mutations: {},

  actions: {
    async Logout() {
      localStorage.removeItem('access_token')
    }
  }
}

export default user
