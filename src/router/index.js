import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalogo',
        name: 'catalogo',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/catalogo.vue')
    },
    {
        path: '/nuestro-vivero',
        name: 'nuestro-vivero',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/nuestro-vivero.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/nuestro-vivero.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router