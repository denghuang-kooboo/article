import Vue from 'vue'
import Vuex from 'vuex'
import Auth from 'store/modules/auth'

Vue.use(Vuex)

const state = {
  route: {
    name: '',
    path: '',
    hash: '',
    query: {
    },
    params: {
    },
    fullPath: '',
    meta: {}
  }
}

export default new Vuex.Store({
  state,
  modules: {
    Auth
  }
})
