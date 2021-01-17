import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatBot.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/Jobs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router