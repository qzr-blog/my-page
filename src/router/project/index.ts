import Calc from 'views/program/calcDiscount.vue'
import Ws from 'views/program/websocket.vue'
import Tetris from 'views/program/tetris.vue'

export default [
  {
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