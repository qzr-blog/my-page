import api from 'api/index'
import { getToken, setToken } from 'util/token'
import { Message } from 'element-ui';

export default {
    namespaced: true,
    state: {
        name: '',
        token: getToken(),
        admin: false
    },
    getters: {
        getName: state => state.name,
        getToken: state => state.token,
        getAdmin: state => state.admin
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_NAME(state, name) {
            state.name = name
        },
        SET_ADMIN(state, isAdmin) {
            state.admin = isAdmin
        }
    },
    actions: {
        login({ commit }, userInfo) {
            const { name, password } = userInfo
            return new Promise((resolve, reject) => {
                api.basic.login({
                    name: name,
                    password: password
                }).then(res => {
                    const { data } = res
                    Message({
                        type: "success",
                        message: "登录成功"
                    });
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                    //设置管理员
                    commit('SET_ADMIN', true)
                    resolve()
                }).catch(err => {
                    Message({
                        type: "error",
                        message: err
                    });
                    reject(err)
                })
            })
        },

        getUser({ commit, state }) {
            return new Promise((resolve, reject) => {
                api.basic.getUserInfo({
                    token: state.token
                }).then(res => {
                    const { data } = res
                    commit('SET_NAME', data.name)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        signUp({ dispatch }, userInfo) {
            const { name, password } = userInfo
            return new Promise((resolve, reject) => {
                api.basic.signUp({ name, password }).then(res => {
                    const { data } = res
                    Message({
                        type: 'success',
                        message: '注册成功，将自动登录'
                    })
                    dispatch('login', { name, password })
                    resolve()
                }).catch(err => {
                    Message({
                        type: 'error',
                        message: err
                    })
                    reject(err)
                })
            })
        }
    }
}