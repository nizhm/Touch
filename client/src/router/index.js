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
    path: '/video-call',
    name: 'video-call',
    component: () => import('../views/media/StillPictureCapture')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/media/VideoCapture')
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/media/AudioCapture')
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('../views/media/ScreenCapture')
  }
]

const router = new VueRouter({
  routes
})

export default router
