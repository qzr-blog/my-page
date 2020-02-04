import Vue from 'vue'
import Router from 'vue-router'
import Project from './project/index'
import Admin from './admin/index'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import State from '../views/State.vue'
import NotFoundComponent from '../views/404.vue'
import Show from '../views/Show.vue'
import Archives from '../views/Archives.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '*', component: NotFoundComponent },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/state',
            name: 'state',
            component: State
        },
        {
            path: '/archives',
            name: 'archives',
            component: Archives
        },
        {
            path: '/show/:id',
            name: 'show',
            component: Show
        },
        ...Admin,
        ...Project
    ]
})
