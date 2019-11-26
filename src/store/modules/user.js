import api from 'api'
import {getToken} from 'util/token'
import { resolve } from '_any-promise@1.3.0@any-promise'

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
    login({ commit }, data) {
      const {name, password} = data
      return new Promise((resolve, reject) => {
        api.basic.login({
          name: name,
          password: password
        }).then(res => {
          const {data} = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
        }).catch(err => {
          reject(err)
        })
      })
    },

    getUser({commit}, data) {

    }
  }
}
