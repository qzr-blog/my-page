import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import Project from './project/index'
import About from 'views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...Project,
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
