import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import Calc from 'views/program/calcDiscount.vue'
import Ws from 'views/program/websocket.vue'
import Tetris from 'views/program/tetris.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/project/calc',
      name: 'Calc',
      component: Calc
    }, {
      path: '/project/websocket',
      name: 'Ws',
      component: Ws
    }, {
      path: '/project/tetris',
      name: 'Tetris',
      component: Tetris
    }
  ]
})
