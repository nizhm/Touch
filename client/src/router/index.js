import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/StillPictureCapture')
  }
]

const router = new VueRouter({
  routes
})

export default router
