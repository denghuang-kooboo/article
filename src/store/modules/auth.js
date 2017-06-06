import _ from 'lodash'
import UserService from 'services/user'
const types = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USERINFO: 'SET_USERINFO',
  LOGIN: 'LOGIN',
  lOGOUT: 'LOGOUT'
}

const state = {
  token: '',
  userInfo: {
    userId: '',
    phone: '',
    email: '',
    birthDate: '',
    name: '',
    gender: '',
    account: '',
    department: {
      codeNo: '',
      name: '',
      parentCodeNo: '',
      description: '',
      type: ''
    },
    job: {
      codeNo: '',
      name: '',
      parentCodeNo: '',
      description: '',
      type: ''
    },
    permissions: []
  }
}

const getters = {
  isLogin (state) {
    return !_.isEmpty(_.trim(state.token))
  }
}

const actions = {
  setToken ({ commit }, {token}) {
    commit(types.SET_TOKEN, token)
  },
  setUserInfo ({ commit }, userInfo) {
    commit(types.SET_USERINFO, userInfo)
  },
  login ({ commit }, { userName, password }) {
    UserService.login(userName, password).then((response) => {
      let token = response.data.token || ''
      commit(types.SET_TOKEN, token)
      let userInfo = response.data.userInfo || {}
      commit(types.SET_USERINFO, userInfo)
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    }, () => {
      commit(types.SET_TOKEN, '')
      commit(types.SET_USERINFO, {})
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userInfo')
    })
  },
  logout ({commit}) {
    commit(types.SET_TOKEN, '')
    commit(types.SET_USERINFO, {})
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
  }
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
