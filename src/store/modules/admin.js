import api from 'api'

export default {
  namespaced: true,
  state: {
    name: '',
    password: '',
    token: ''
  },
  getters: {
    getName: state => state.name,
    getToken: state => state.token
  },
  mutations: {
    setToken(state, val) {
      state.token = val
    },
    setUser(state, val) {
      state.name = val.name
      state.password = val.password
    }
  },
  actions: {
    getUser({ commit }, data) {
      api.basic.login({
        name: data.name,
        password: data.password
      }).then(res => {
        commit('setToken', res.data)
        commit('setUser', res)
      })
    }
  }
}
