import './plugins/element.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import api from './api'
import axios from './common/js/axios'
import 'normalize.css'
import util from './util/util'

import VueSocketIO from 'vue-socket.io'

import L2Dwidget from 'live2d-widget'
import CanvasNest from 'canvas-nest.js'


Vue.prototype.$axios = axios
Vue.prototype.$util = util
Vue.prototype.$api = api

new CanvasNest(document.querySelector('body'), {
  color: '25,142,243',
  opacity: '0.7',
  zIndex: '1',
  count: 99
})

L2Dwidget.L2Dwidget.init({
  display: {
    position: 'right',
    width: 170,
    height: 230,
    hOffset: 0,
    vOffset: -20
  },
  mobile: {
    show: true,
    scale: 1,
    motion: true
  },
  react: {
    opacity: 1
  },
  dev: {
    border: false
  },
  dialog: {
    enable: true,
    hitokoto: false
  }
})

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: 'http://47.110.149.190:3000'
  })
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
