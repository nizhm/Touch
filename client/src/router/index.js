import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login'),
    hidden: false,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home'),
    hidden: false,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/video-call',
    name: 'video-call',
    component: () => import('../views/media/StillPictureCapture'),
    hidden: false,
    meta: {
      title: 'VideoCall'
    }
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/media/VideoCapture'),
    hidden: false,
    meta: {
      title: 'Video'
    }
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/media/AudioCapture'),
    hidden: false,
    meta: {
      title: 'Audio'
    }
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('../views/media/ScreenCapture'),
    hidden: false,
    meta: {
      title: 'Screen'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
