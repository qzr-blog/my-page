import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Calc from '@/page/program/calcDiscount'
import Ws from '@/page/program/websocket'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/project/calc',
    name: 'Calc',
    component: Calc
  }, {
    path: '/project/websocket',
    name: 'Ws',
    component: Ws
  }]
})
