import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserSearch from '@/components/user-search'
import Login from '@/components/login'
import Layout from '@/components/layout'
import Register from '@/components/register'
import NotFound from '@/components/not-found'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      meta: {
        requireAuth: true
      },
      component: Layout,
      children: [
        {
          name: 'home',
          path: '',
          component: Home
        },
        {
          path: 'user',
          name: 'user-search',
          component: UserSearch
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
export default router
