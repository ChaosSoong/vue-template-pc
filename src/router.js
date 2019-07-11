import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/player',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Home.vue'),
      children: [
        {
          name: '/player',
          path: 'player',
          component: () => import('./views/Player.vue')
        },
        {
          name: '/judge',
          path: 'judge',
          component: () => import('./views/Judge.vue')
        }
      ]
    }
  ]
})
