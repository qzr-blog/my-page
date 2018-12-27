import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Calc from '@/page/calcDiscount'

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
  }]
})
