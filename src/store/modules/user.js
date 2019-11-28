import api from 'api/index'
import {getToken, setToken} from 'util/token'

export default {
  namespaced: true,
  state: {
    name: '',
    token: getToken()
  },
  getters: {
    getName: state => state.name,
    getToken: state => state.token
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NAME(state, name) {
      state.name = name
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const {name, password} = userInfo
      return new Promise((resolve, reject) => {
        api.basic.login({
          name: name,
          password: password
        }).then(res => {
          const {data} = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    getUser({commit, state}) {
      return new Promise((resolve) => {
        api.basic.getUserInfo({
          token: state.token
        }).then(res => {
          const {data} = res
          commit('SET_NAME', data.name)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
