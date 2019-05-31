import Vue from 'vue'
import Router from 'vue-router'
import Project from './project/index'
import Home from 'views/Home.vue'
import About from 'views/About.vue'
import State from 'views/State.vue'

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
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/state',
      name: 'state',
      component: State
    },
    ...Project
  ]
})
