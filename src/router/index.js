import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEach: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/password-recovery',
    name: 'Password Recovery',
    component: () => import('../views/PasswordRecovery.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/settings',
    name: "Settings",
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
