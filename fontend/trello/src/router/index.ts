import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
